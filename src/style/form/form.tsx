import React, { useState } from 'react';
import './style-form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { colors } from '../colors';
import { Label } from '../typography/LargeLabel';

interface FormProps {
  caption?: string;
  label?: string;
  icon?: IconDefinition;
}
export const Form = ({ caption, label, icon }: FormProps) => {
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState("");

  let border, borderColor;

  if (focused) {
    border = `1px solid ${colors.neutral.neutralLight}`;
  } else if (error) {
    border = `1px solid ${colors.feedback.feedbackError}`;
  } else {
    border = `1px solid ${colors.neutral.neutralLight}`;
  };

  const inputStyle = {
    border,
    borderColor,
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue) {
      setError("");
    } else {
      setError("Este campo é obrigatório.");
    }
  };

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  return (
    <div>
      {!!icon && <FontAwesomeIcon icon={icon} />}
      <div className="input-container form">
        <Label color="dark">{label}</Label>
        <input
          className="input-style"
          style={inputStyle}
          type={label === "Senha" ? "password" : "text"}
          placeholder={label}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {error && (
          <span style={{ color: colors.feedback.feedbackError }}>
            {error}
          </span>
        )}
      </div>
      {caption && (
        <div className="icon-caption-container">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            style={{ margin: "10px", color: colors.feedback.feedbackError }}
          />
          <span style={{ color: colors.feedback.feedbackError }}>{caption}</span>
        </div>
      )}
    </div>
  );
};
