import { useState } from 'react';

export const useForm = (initValues, onSubmitHandler) => {
  
  const [values, setValues] = useState(initValues);



  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value   }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onSubmitHandler(values);
    setValues(initValues);
  };

  const changeValues = (newValues) => {
    // TODO: validate newValues' shape = should be like initValues

    setValues(newValues);
  };

  return {
    values,
    onChangeHandler,
    onSubmit,
    changeValues,
  };
};
