import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { Form } from './LoginForm.styled';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    switch (e.target.name) {
      case 'email':
        return setEmail(e.target.value);

      case 'password':
        return setPassword(e.target.value);

      default:
        return;
    }
  };

  const onLoginSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email,
        password,
      })
    );
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={onLoginSubmit}>
      <label htmlFor="">
        Email
        <Input type="email" name="email" value={email} onChange={onChange} />
      </label>
      <label htmlFor="">
        Password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </label>
      <Button size="sm" width="150px" type="submit">
        Login
      </Button>
    </Form>
  );
};
