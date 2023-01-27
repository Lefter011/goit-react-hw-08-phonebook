import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Input, Button } from '@chakra-ui/react';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <Input placeholder='Email' type="email" name="email" />
      </label>
      <label className={css.label}>
        <Input placeholder='Password' type="password" name="password" />
      </label>
      <Button type="submit">Log In</Button>
    </form>
  );
};