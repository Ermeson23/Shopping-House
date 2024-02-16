import React, { FormEvent, ChangeEvent } from 'react';
import { useLoginUserMutation } from '../../store/login/loginSlice';
import { UserLoginData } from '../../types/types';

import "./Login.css";

export default function Login() {
    const [loginUser, { isLoading, data }] = useLoginUserMutation();

    const [formValues, setFormValues] = React.useState<UserLoginData>({
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
        loginUser(formValues);
    };

    if (isLoading) return <div>Carregando...</div>;

    if (data) return <div>Usuário logado com sucesso! ID: {data.id}</div>;

    return (
        <section>
            <h2>Login</h2>
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

                <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
        </section>
    )
}