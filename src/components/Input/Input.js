import { TextField } from '@mui/material';
import { useCallback } from 'react';

export const Input = ({ onChange, ...props }) => {
  const handleChange = useCallback((event) => onChange({
    value: event.target.value,
    name: event.target.name,
  }), [onChange]);

  return <TextField onChange={handleChange} {...props} />;
};
