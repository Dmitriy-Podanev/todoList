import React, { FormEvent, useEffect, useState } from "react";
import * as Yup from "yup";
import "./ModalForm.css";
import { AppState } from "../../Store/app/Types";
import { Field, useFormik } from "formik";

import { block } from "bem-cn";
import {
  DatabaseManager,
  DatabaseManagerEventName,
} from "../../DataBaseManager";
import { useDispatch, useSelector } from "react-redux";
//import {appAddTask, appEditTask} from "../../Store/app/action";
import { useDatabase } from "../../hooks/useDatabase";
import { RootStore } from "../../Store/app/Store/store";

interface Props {
  active: boolean;
  data: AppState.itemState | null;
  setActive: () => void;
}

//TODO: соделать nanoid
//let myDB = new DatabaseManager("NewDB",["items"])
const b = block("modal");
const schema: Yup.SchemaOf<AppState.itemTypesForm> = Yup.object().shape({
  Name: Yup.string().required("Поле Name обязательно"),
  Description: Yup.string(),
});

export const ModalCategory: React.FC<Props> = ({ active, setActive, data }) => {
  const globalState = useSelector((state: RootStore) => state.global);
  const categoryState = useSelector((state: RootStore) => state.category);
  const database = useDatabase();
  const [mode, setMode] = useState("Добавление");

  const {
    handleBlur,
    touched,
    errors,
    values,
    submitForm,
    handleChange,
    setValues,
    setFieldValue,
    handleReset,
    setSubmitting,
    handleSubmit,
    resetForm,
  } = useFormik<AppState.itemState>({
    initialValues: {
      id: data?.id ?? Math.random(), //nanoid (string )
      Name: data?.Name ?? "",
      Description: "",
    },

    validationSchema: schema,
    onSubmit: async (fields) => {
      debugger;
      try {
        if (data !== null) {
          database.editObject(globalState.selectMode, fields);
        } else {
          database.createObject(globalState.selectMode, fields);
        }
      } catch (e) {
        alert("Ошибка создания обьекта"); //todo dispatch(ERROR) GlobalState
      } finally {
        window.dispatchEvent(new CustomEvent(DatabaseManagerEventName));
        resetForm({
          values: {
            id: data?.id ?? Math.random(), //nanoid (string )
            Name: data?.Name ?? "",
            Description: "",
          },
        });
        setActive();
      }
    },
  });

  useEffect(() => {
    if (data !== null) {
      setValues(data);
      setMode("Редактирование");
    }
  }, [data]);

  function close(e: any) {
    // handleReset(e);
    setActive();
  }
  //value={values.CategoryId}

  return active ? (
    <form
      className={b()}
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
    >
      <div className={b("content")}>
        <div className={b("ModalName")}>{mode} категории</div>
        <input
          type="text"
          name={"Name"}
          value={values.Name}
          placeholder={"Название"}
          onChange={handleChange}
          onBlur={handleBlur}
          min={1}
          max={255}
          autoFocus
        />
        {errors.Name && touched.Name ? <div>{errors.Name}</div> : null}

        <input
          type="text"
          name={"Description"}
          value={values.Description}
          placeholder={"Описание может быть длинным"}
          onChange={handleChange}
          max={512}
          onBlur={handleBlur}
        />
        {errors.Description && touched.Description ? (
          <div>{errors.Description}</div>
        ) : null}

        {values.Name === "" ? (
          <button disabled> Сохранить</button>
        ) : (
          <button type="submit">Сохранить</button>
        )}
        <button onClick={(e) => close(e)}>Закрыть</button>
      </div>
    </form>
  ) : null;
};
