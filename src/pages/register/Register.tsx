import React, { FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useRegisterUserMutation } from '../../store/register/registerSlice';
import { UserRegisterData } from '../../types/types';

import "./Register.css";

export default function Register() {
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();

  const navigate = useNavigate();

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await registerUser(formValues).unwrap();
      alert("Usuário cadastrado com sucesso.");
      navigate("../pages/login");
    } catch (error) {
      console.error("Erro ao tentar cadastrar usuário.");
    }
  };

  if (isLoading) return <div>Carregando...</div>;

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
        {isError && <p>Erro ao tentar cadastrar usuário.</p>}
        <p>Já tem uma conta?<Link aria-label="Link para a tela de login" className="text-detail" to="../pages/login">Fazer login</Link></p>
      </form>
    </section>
  )
}