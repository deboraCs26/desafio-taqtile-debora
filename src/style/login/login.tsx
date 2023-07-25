import React, { useState } from 'react';
import "./login.css";
import { FormField } from '../form/form';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { H1 } from "../typography/h1";
import { Body2 } from "../typography/body2";
import { Button } from "../button/button";

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFields = () => {
    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('Campo obrigatório.');
    } else if (!isValidEmail(email)) {
      setEmailError('Email inválido.');
    }

    if (!password.trim()) {
      setPasswordError('Campo obrigatório.');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    validateFields();
  };

  return (
    <div className='login-container'>
      <H1 color="XDark">Acesse sua conta</H1>

      <div className='account-login'>
        <Body2 color="neutralMedium">Para utilizar os serviços da nossa plataforma, você precisa entrar uma conta!</Body2>
      </div>

      <form onSubmit={handleSubmit} className='form-login-container'>
        <div className='field-form'>
          <FormField
            label="Email"
            error={!!emailError}
            caption={emailError}
            value={email}
            icon={faExclamationTriangle}
            onChange={setEmail}
            expand
          />
        </div>
        <div className='field-form'>
          <FormField
            label="Senha"
            password
            error={!!passwordError}
            caption={passwordError}
            minLength={8}
            value={password}
            onChange={setPassword}
            expand
          />
        </div>
        <div className='button-login-container'>
          <Button variant="primary" expand>Entrar</Button>
        </div>
      </form>
    </div>
  );
};
