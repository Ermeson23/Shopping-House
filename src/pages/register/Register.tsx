import React, { FormEvent, ChangeEvent } from 'react';
import { useRegisterUserMutation } from '../../store/register/registerSlice';
import { UserRegisterData } from '../../types/types';

import "./Register.css";

export default function Register() {
  const [registerUser, { isLoading, data }] = useRegisterUserMutation();

  const [formValues, setFormValues] = React.useState<UserRegisterData>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser(formValues);
  };

  if (isLoading) return <div>Carregando...</div>;

  if (data) return <div>Usuário registrado com sucesso! ID: {data.id}</div>;

  return (
    <section>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="form-label">E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        className="form-control"
      />

      <label htmlFor="password" className="form-label">Senha:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        className="form-control"
      />

      <button type="submit" className="btn btn-primary">Cadastrar</button>
    </form>
    </section>
  )
}