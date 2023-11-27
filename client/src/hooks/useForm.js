import { useState } from "react"


export const useForm = (initValues, onSubmitHandler) => {
    const [values, setValues] = useState(initValues);

    const onChangeHandler = (e) => {
        setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
    }

    return {
        values,
        onChangeHandler,
        onSubmit,
    }
}