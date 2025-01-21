import { useState } from "react";

export const useForm = <T extends object>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    formState,
    onInputChange,
    setFormState,
  };
};
