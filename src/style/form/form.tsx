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
  error?: boolean;
  label: string;
  icon?: IconDefinition;
  password?: boolean;
  minLength?: number;
}

export const FormField = ({ error, label, icon, password, caption}: FormProps) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
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
    <div className="form-container">
      <div className="input-container" style={inputStyle}>
        <Label color="Xdark">{label}</Label>
        <input
          style={{ width: '100%' }}
          className="input-style"
          type={password ? 'password' : 'text'}
          placeholder={label}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required={true}
        />
      </div>
      <div className="caption">
        {error && (
          <Caption color='dark'>
            {!!icon && <FontAwesomeIcon icon={faExclamationTriangle} size="lg" className="icon" />}
            {caption}
          </Caption>
        )}
      </div>
    </div>
  );
};
