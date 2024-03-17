import { useDispatch } from 'react-redux';
import { register as registerUser } from '../../redux/auth/authOperations';
import Input from '@mui/joy/Input';
import { Form } from 'components/logInForm/LoginForm.styled';
import { Button } from '@mui/joy';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { validatePattern, errorMessage } from 'constants';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { clearError } from '../../redux/auth/authSlice';
import * as S from './RegisterForm.styled';
import { Loader } from 'components/loader';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(255)
    .matches(validatePattern.name, errorMessage.name)
    .required(),
  email: yup
    .string()
    .max(255)
    .matches(validatePattern.email, errorMessage.email)
    .required(),
  password: yup.string().min(8).max(255).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};
export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const { isLoading, error: authError } = useAuth();

  useEffect(() => {
    if (authError) {
      console.log(authError);
      toast.error(
        'Something went wrong. There may already be a user with this email address.'
      );
      dispatch(clearError());
    }
  }, [authError, dispatch]);

  const onSubmit = ({ name, email, password }) => {
    console.log(name, email, password);

    dispatch(
      registerUser({
        name,
        email,
        password,
      })
    );
    reset();
  };
  return (
    <Form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <h1>Register</h1>
      <label>
        Name
        <Input {...register('name')} type="text" placeholder="Your full name" />
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
      </label>
      <label>
        Email
        <Input
          {...register('email')}
          type="email"
          placeholder="Your email address"
        />
        {errors.email && <S.ErrorText>{errors.email?.message}</S.ErrorText>}
      </label>
      <label>
        Password
        <Input
          {...register('password')}
          type="password"
          placeholder="Your password"
        />
        {errors.password && (
          <S.ErrorText>{errors.password?.message}</S.ErrorText>
        )}
      </label>
      <Button size="sm" disabled={isLoading} type="submit">
        {isLoading ? (
          <Loader width="15" height="15" color="#fff" />
        ) : (
          ' Register'
        )}
      </Button>
    </Form>
  );
};
