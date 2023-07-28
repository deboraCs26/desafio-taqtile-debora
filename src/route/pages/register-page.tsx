import React from "react";
import { Menu } from "../../style/header";
import { RegisterForm } from "../../style/register/register";
import { Separator } from "../../style/separator/separator";

export function Register() {
  return (
    <>
      <Menu />

      <Separator size="XLarge" />
      <Separator size="XLarge" />
      <RegisterForm />
    </>
  );
};
