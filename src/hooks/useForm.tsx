import { useState } from 'react';

export const useForm = <T extends Record<string, unknown>>(form: T) => {
  const [state, setState] = useState(form);

  const handleChange = (value: string, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return { ...state, form: state, handleChange };
};
