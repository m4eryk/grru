import { Input } from './Input';
import { useState } from 'react';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordPostfix = ({ onClick, isPassword }) => (
  <InputAdornment onClick={onClick} position='end'>
    {isPassword ? <Visibility/> : <VisibilityOff/>}
  </InputAdornment>
);

export const PasswordInput = ({ ...props }) => {
  const [isText, setPasswordVisible] = useState();

  const handleClick = () => setPasswordVisible(!isText);

  return (
    <Input
      {...props}
      type={isText ? 'text' : 'password'}
      InputProps={{ endAdornment: <PasswordPostfix isPassword={isText} onClick={handleClick}/> }}
    />
  );
};
