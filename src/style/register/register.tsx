import React, { useState } from 'react';
import "./register.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FormField } from "../form/form";
import { H1 } from "../typography/h1";
import { Body2 } from "../typography/body2";
import { Button } from "../button/button";
import { ImageForm } from '../images-form/img';
import { Separator } from '../separator/separator';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmarPasswordError, setConfirmarPasswordError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  };

  const validateFields = () => {
    setNameError('');
    setLastNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmarPasswordError('');

    if (!name.trim()) {
      setNameError('Campo obrigatório. O nome deve ter ao menos 2 letras.');
    } else if (name.length < 2) {
      setNameError('Nome inválido. O nome deve ter ao menos 2 letras.');
    }

    if (!lastName.trim()) {
      setLastNameError('Campo obrigatório. O sobrenome deve ter ao menos 2 letras.');
    } else if (lastName.length < 2) {
      setLastNameError('Sobrenome inválido. O sobrenome deve ter ao menos 2 letras.');
    }

    if (!email.trim()) {
      setEmailError('Campo obrigatório.');
    } else if (!isValidEmail(email)) {
      setEmailError('Email inválido.');
    }

    if (!password.trim()) {
      setPasswordError('Campo obrigatório. A senha deve conter pelo menos 6 caracteres, incluindo letras e números.');
    } else if (!isValidPassword(password)) {
      setPasswordError('Senha inválida. A senha deve conter pelo menos 6 caracteres, incluindo letras e números.');
    }

    if (!confirmarPassword.trim()) {
      setConfirmarPasswordError('Campo obrigatório.');
    } else if (password !== confirmarPassword) {
      setConfirmarPasswordError('As senhas não coincidem.');
    }
  };

  const handleSubmit = () => {
    validateFields();
    if (!nameError && !emailError && !passwordError && !confirmarPasswordError && !lastName) {
    }
  };

  return (
    <div className='register-container'>
      <div className='register-page-container'>
        <div className='title-register'>
          <H1 color="XDark">Cadastro</H1>
          <Body2 color="neutralMedium">Insira alguns dados sobre seu perfil. </Body2>
        </div>

        <Separator size="XLarge" />
        <div className='register-form-container'>
          <FormField
            label="Email"
            icon={faExclamationTriangle}
            caption={emailError}
            value={email}
            onChange={setEmail}
            error={!!emailError}
            expand
          />

          <div className='name-register'>
            <FormField
              label="Digite seu nome"
              icon={faExclamationTriangle}
              caption={nameError}
              value={name}
              onChange={setName}
              error={!!nameError}
              expand
            />

            <Separator size='medium' horizontal />
            <FormField
              label="Sobrenome"
              icon={faExclamationTriangle}
              caption={lastNameError}
              value={lastName}
              onChange={setLastName}
              error={!!lastNameError}
              expand
            />
          </div>

          <FormField
            label="Crie sua senha"
            password
            icon={faExclamationTriangle}
            caption={passwordError}
            minLength={6}
            value={password}
            onChange={setPassword}
            error={!!passwordError}
            expand
          />

          <FormField
            label="Confirmação de senha"
            password
            icon={faExclamationTriangle}
            caption={confirmarPasswordError}
            minLength={6}
            value={confirmarPassword}
            onChange={setConfirmarPassword}
            error={!!confirmarPasswordError}
            expand
          />
        </div>
      </div>

      <div className='terms-button-container'>
        <div className='terms-registration'>
          <Body2 weight='bold'><FontAwesomeIcon icon={faCircleCheck} color='#2E9CA3' size='lg' className='icon-form' />Eu aceito todos os termos e condições</Body2>
        </div>

        <Separator size='XLarge' />
        <div className='button-register'>
          <Button variant="primary" expand onClick={handleSubmit}>Cadastrar</Button>
        </div>
      </div>
      <div className='register-image'>
        <ImageForm />
      </div>
    </div>
  );
};
