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
import { DT } from '../typography/dt-dd';
import { Separator } from '../separator/separator';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');
  const [confirmarSenhaError, setConfirmarSenhaError] = useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidSenha = (senha: string) => {
    const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return senhaRegex.test(senha);
  };

  const validateFields = () => {
    setNameError('');
    setEmailError('');
    setSenhaError('');
    setConfirmarSenhaError('');

    if (!name.trim()) {
      setNameError('Campo obrigatório. O nome deve ter ao menos 2 letras.');
    } else if (name.length < 2) {
      setNameError('Nome inválido. O nome deve ter ao menos 2 letras.');
    }

    if (!email.trim()) {
      setEmailError('Campo obrigatório.');
    } else if (!isValidEmail(email)) {
      setEmailError('Email inválido.');
    }

    if (!senha.trim()) {
      setSenhaError('Campo obrigatório. A senha deve conter pelo menos 6 caracteres, incluindo letras e números.');
    } else if (!isValidSenha(senha)) {
      setSenhaError('Senha inválida. A senha deve conter pelo menos 6 caracteres, incluindo letras e números.');
    }

    if (!confirmarSenha.trim()) {
      setConfirmarSenhaError('Campo obrigatório.');
    } else if (senha !== confirmarSenha) {
      setConfirmarSenhaError('As senhas não coincidem.');
    }
  };

  const handleSubmit = () => {
    validateFields();
    if (!nameError && !emailError && !senhaError && !confirmarSenhaError) {
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
              label="Digite Seu Nome"
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
              caption={nameError}
              value={name}
              onChange={setName}
              error={!!nameError}
              expand
            />
          </div>

          <FormField
            label="Crie Sua Senha"
            password
            icon={faExclamationTriangle}
            caption={senhaError}
            minLength={6}
            value={senha}
            onChange={setSenha}
            error={!!senhaError}
            expand
          />
          
          <FormField
            label="Confirmar Senha"
            password
            icon={faExclamationTriangle}
            caption={confirmarSenhaError}
            minLength={6}
            value={confirmarSenha}
            onChange={setConfirmarSenha}
            error={!!confirmarSenhaError}
            expand
          />
          <Separator size='XSmall' />
        </div>
      </div>

      <div className='terms-button-container'>
        <div className='terms-registration'>
          <DT weight='bold'><FontAwesomeIcon icon={faCircleCheck} color='#2E9CA3' size='lg' className='icon-form' />Eu aceito todos os termos e condições</DT>
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
