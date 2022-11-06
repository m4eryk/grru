import { useState } from 'react';
import styles from './index.module.scss';
import { Button, Paper } from '@mui/material';
import { Input, PasswordInput } from '../../components/Input';


export const Login = () => {
  const [form, setForm] = useState({});

  const handleChangeForm = ({ value, name }) => setForm({ ...form, [name]: value });

  const handleSubmit = () => console.log(form);

  return (
    <div className={styles.login}>
      <Paper as='form' className={styles.loginForm} variant='outlined'>
        <span className={styles.loginFormTitle}>
          Login
        </span>
        <Input name='login' placeholder='login' onChange={handleChangeForm} />
        <PasswordInput name='password' placeholder='password' onChange={handleChangeForm} />
        <Button onClick={handleSubmit} variant='outlined'>
          Sing In
        </Button>
      </Paper>
    </div>
  );
};
