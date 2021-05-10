import React, {useEffect, useState} from "react";
import * as Yup from 'yup'
import "./ModalForm.css"
import {AppState} from "../../Store/app/Types";
import {Field, useFormik} from "formik";

import {block} from "bem-cn";
import {DatabaseManager} from "../../DataBaseManager";
import {useDispatch, useSelector} from "react-redux";
//import {appAddTask, appEditTask} from "../../Store/app/action";
import {useDatabase} from "../../hooks/useDatabase";
import {RootStore} from "../../Store/app/Store/store";


interface Props {
    active: boolean
    data: AppState.itemState | null
    setActive: () => void
}


//let myDB = new DatabaseManager("NewDB",["items"])
const b = block("modal")
const schema: Yup.SchemaOf<AppState.itemTypesForm> = Yup.object().shape(({
    Name: Yup.string().required('Поле Name обязательно'),
    Description: Yup.string()
}))

export const Modal: React.FC<Props> = ({active, setActive, data}) => {

    const globalState = useSelector((state: RootStore) => state.global)
    const categoryState = useSelector((state: RootStore) => state.category)
    const database = useDatabase()

    const {handleBlur, touched, errors, values, submitForm, handleChange, setValues, setFieldValue, handleReset,} = useFormik<AppState.itemState>({
        initialValues: {


            id: data?.id ?? Math.random(),
            Name: data?.Name ?? "",
            CategoryId: data?.CategoryId,
            Description: "Описание Задачи может быть длинным"

        },

        validationSchema: schema,
        onSubmit: async (fields) => {

            try {


                if (data !== null) {
                    database.editObject(globalState.selectMode, fields)
                } else {
                    database.createObject(globalState.selectMode, fields)
                }

            } catch (e) {
                alert("Ошибка") //todo dispatch(ERROR)
            }
        }
    })

    useEffect(() => {
        if (data !== null) {
            setValues(data)
        }

    }, [data])

    function close(e: any) {
        handleReset(e)
        setActive()
    }


    return (active ? (<form className={b()} onSubmit={submitForm}>
                <div className={b('content')}>
                    <input type="text" name={"Name"} value={values.Name} onChange={handleChange}
                           onBlur={handleBlur} min={1} max={255}
                           autoFocus/>
                    {errors.Name && touched.Name ? (
                        <div>{errors.Name}</div>
                    ) : null}
                    {globalState.selectMode !== "category" ? (
                        <select name={"CategoryId"} value={values.CategoryId} onChange={handleChange}>
                            <option value={values.CategoryId}>{values.CategoryId}</option>
                            {categoryState.data.map((item: AppState.categoryState) => {
                                return (<option value={item.id}>{item.Name}</option>)
                            })}

                            {/*<option value="grapefruit">Грейпфрут</option>*/}
                            {/*<option value="lime">Лайм</option>*/}
                            {/*<option value="coconut">Кокос</option>*/}
                            {/*<option value="mango">Манго</option>*/}
                        </select>
                    ) : null}
                    <input type="text" name={"Description"} value={values.Description}
                           onChange={handleChange} max={512}

                           onBlur={handleBlur}/>
                    {errors.Description && touched.Description ? (
                        <div>{errors.Description}</div>
                    ) : null}


                    {values.Name === "" ? <button disabled> Сохранить</button> :
                        <button type="submit">Сохранить</button>}
                    <button onClick={(e) => close(e)}>Закрыть</button>

                </div>
            </form>)
            :
            null
    )
}
//todo поработать с кнопкой submit
