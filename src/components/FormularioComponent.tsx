import { FormEvent, useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

interface FormState {
  userName: string;
  email: string;
  password: string;
}

export const FormularioComponent = () => {
  const focusRef = useRef<HTMLInputElement | null>(null)
  console.log(focusRef)
  const initialForm: FormState = {
    userName: "",
    email: "",
    password: "",
  };

  const { formState, onInputChange, setFormState } = useForm<FormState>(initialForm);
  const { userName, email, password } = formState;

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!userName || !email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    console.log("Formulario enviado:", formState);

    // Limpiar los campos
    setFormState(initialForm);
  };
  useEffect(() => {
    focusRef.current?.focus()
  

  },)
  

  return (
    <div>
      <h2>Formulario de Registro</h2>
      <form onSubmit={onSubmit}>
        {/* Campo User Name */}
        <div className="form-group">
          <label htmlFor="userName">Nombre de Usuario</label>
          <input
            type="text"
            className="form-control"
            name="userName"
            placeholder="Ingresa tu nombre de usuario"
            value={userName}
            onChange={onInputChange}
          />
        </div>

        {/* Campo Email */}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            ref={focusRef}
            type="email"
            className="form-control"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={onInputChange}
          />
        </div>

        {/* Campo Password */}
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={onInputChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!userName || !email || !password}
          style={{ marginTop: "10px" }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
