import React from "react";
import * as Yup from 'yup'
import "./ModalForm.css"
import {AppState} from "../../Store/app/Types";
import {Field, useFormik} from "formik";
import {log} from "util";
import {block} from "bem-cn";
import { addItem } from "../../indexedDB";

interface Props {
    active: boolean
    data: AppState.itemState | null
    setActive: () => void
}

const b = block("modal")
const schema: Yup.SchemaOf<AppState.itemTypesForm> = Yup.object().shape(({
    Name: Yup.string().required('Поле Name обязательно'),
    Description: Yup.string()
}))

export const Modal: React.FC<Props> = ({active, setActive, data}) => {

    const {handleBlur, touched, errors, values, submitForm, handleChange} = useFormik<AppState.itemState>({
        initialValues: {

            id: data?.id ?? "",
            Name: data?.Name ?? "",
            CategoryId: data?.CategoryId ?? "",
            Description: data?.Description ?? ""


        },

        validationSchema: schema,
        onSubmit: async (fields) => {

            try {

                await addItem(fields)
            } catch (e) {
                alert("Ошибка") //todo dispatch(ERROR)
            }
        }
    })


    return (active ? (<form className={b()} onSubmit={submitForm}>
                <input type="text" name={"Name"} value={values.Name} onChange={handleChange} onBlur={handleBlur} min={1}
                       autoFocus/>
                {errors.Name && touched.Name ? (
                    <div>{errors.Name}</div>
                ) : null}
                <input type="text" name={"Description"} value={values.Description} onChange={handleChange}
                       onBlur={handleBlur}/>
                {errors.Description && touched.Description ? (
                    <div>{errors.Description}</div>
                ) : null}


                {values.Name ==="" ? <button disabled> Сохранить</button> :
                    <button type="submit">Сохранить</button>}

            </form>)
            :
            null
    )
}
//todo поработать с кнопкой submit
