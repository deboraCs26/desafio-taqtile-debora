import React, { useState } from 'react';
import "./style-form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../colors';
import { Label } from '../typography/large-label';
import { Caption } from '../typography/caption';

interface FormProps {
  caption?: string;
  error?: boolean;
  label: string;
  icon?: IconDefinition;
  password?: boolean;
  minLength?: number;
  value: string;
  onChange: (value: string) => void;
  expand?: boolean
}

export const FormField = ({ error, label, icon, password, caption, value, onChange, expand }: FormProps) => {
  const [focused, setFocused] = useState(false);

  let border;

  if (focused) {
    border = `2px solid ${colors.neutral.neutralLight}`;
  } else if (error) {
    border = `1px solid ${colors.feedback.feedbackError}`;
  } else if (value) {
    border = `1px solid ${colors.neutral.neutralLight}`;
  } else {
    border = `1px solid`;
  }

  const inputStyle = {
    border,
    width: expand ? "100%" : "",
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required={true}
        />
      </div>
      <div className="caption">
        {error && (
          <Caption color='dark'>
            {!!icon && <FontAwesomeIcon icon={faExclamationTriangle} size="lg" className="icon-form" />}
            {caption}
          </Caption>
        )}
      </div>
    </div>
  );
};
