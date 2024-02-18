import React, { FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useLoginUserMutation } from '../../store/login/loginSlice';
import { UserLoginData } from '../../types/types';

import "./Login.css";

export default function Login() {
    const [loginUser, { isLoading, isError }] = useLoginUserMutation();

    const navigate = useNavigate();

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await loginUser(formValues).unwrap();
            console.log("Usuário logado com sucesso.");
            navigate("../pages/logged");
        } catch (error) {
            console.error("Erro ao fazer login. Verifique suas credenciais.", error);
        }
    };

    if (isLoading) return <div>Carregando...</div>;

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
                {isError && <p>Erro ao fazer login. Verifique suas credenciais.</p>}
                <p>Não tem uma conta?<Link aria-label="Link para a tela de cadastro" className="text-detail" to="../pages/register">Criar conta</Link></p>
            </form>
        </section>
    )
}