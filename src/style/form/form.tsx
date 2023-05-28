import React, { useState } from 'react';
import './style-form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../colors';
import { components } from '../typography/typography';
import { Label } from '../typography/LargeLabel';
interface FormProps {
  error?: boolean;
  caption?: string;
  label?: string;
  iconError?: IconDefinition;
  icon?: IconDefinition;
  password?: boolean;
}

export const styleError = {
  fontFamily: components.family.primary,
  color: colors.neutral.neutralDark,
}

export const Form = ({error, label, icon, password, caption, iconError}: FormProps) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  let border;

  if (focused) {
    border = `2px solid ${colors.neutral.neutralLight}`;
  } else if (error) {
    border = `1px solid ${colors.feedback.feedbackError}`;
  } else if (inputValue) {
    border = `1px solid ${colors.neutral.neutralLight}`;
  } else {
    border= `1px solid`;
  }

  const inputStyle = {
    border,
  };

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  return (
    <div className='form-container'>
      <div className='input-container'>
        <Label color='dark'>{label}</Label>
        <input
          className='input-style'
          style={inputStyle}
          type={password ? 'password' : 'text'}
          placeholder={label}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {error && (
          <span style={styleError}>
            {!!icon && <FontAwesomeIcon icon={faExclamationTriangle}/>}
            {!!iconError && <FontAwesomeIcon icon={iconError} />}
            {caption}
          </span> 
        )}
      </div>
    </div>
  );
};
