import React, { useState } from 'react';
import './style-form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../colors';
import { Label } from '../typography/LargeLabel';
import { Caption } from '../typography/caption';

interface FormProps {
  caption?: string;
  label?: string;
  iconError?: IconDefinition;
  icon?: IconDefinition;
  password?: boolean;
}

export const FormField = ({ label, icon, password, caption }: FormProps) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  let border;

  if (focused) {
    border = `2px solid ${colors.neutral.neutralLight}`;
  } else if (error) {
    border = `1px solid ${colors.feedback.feedbackError}`;
  } else if (inputValue) {
    border = `1px solid ${colors.neutral.neutralLight}`;
  } else {
    border = `1px solid`;
  };

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
      <div className='input-container' style={inputStyle}>
        <Label color='dark'>{label}</Label>
        <input
          className='input-style'
          type={password ? 'password' : 'text'}
          placeholder={label}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
      {error && (
        <Caption>
          {!!icon && <FontAwesomeIcon icon={faExclamationTriangle} size='lg' className='icon' />}
          {caption}
        </Caption>
      )}
    </div>
  );
};