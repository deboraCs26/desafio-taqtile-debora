import React, { useState } from 'react';
import "./login.css";
import { FormField } from '../form/form';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { H1 } from "../typography/h1";
import { Body2 } from "../typography/body2";
import { Button } from "../button/button";
import { ImageForm } from '../images-form/img';

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

  const handleSubmit = () => {
    validateFields();
  };

  return (
    <div className='login-container'>
      <div className='login-page-container'>
        <H1 color="XDark">Acesse sua conta</H1>

        <div className='account-login'>
          <Body2 color="neutralMedium">Para utilizar os serviços da nossa plataforma, você precisa entrar uma conta!</Body2>
        </div>

        <div className='form-login-container'>
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
              icon={faExclamationTriangle}
              minLength={8}
              value={password}
              onChange={setPassword}
              expand
            />
          </div>
          <div className='button-login-container'>
            <Button variant="primary" expand onClick={handleSubmit}>Entrar</Button>
          </div>
        </div>
      </div>
      <div className='login-image'>
        <ImageForm />
      </div>
    </div>

  );
};
