import { useForm } from 'react-hook-form';

import * as SF from '../FeedbackCarousel/Feedback.styled';
import * as S from './RegistrationForm.styled';

export const RegistrationForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = values => {
    console.log(values);
    alert(JSON.stringify(values));
    reset();
  };

  return (
    <SF.Section>
      <SF.Container>
        <SF.Title>Registration form</SF.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <S.Field>
            <S.Label htmlFor="name">Name</S.Label>
            <S.Input
              id="name"
              hasError={!!errors.name} // props for styling
              aria-invalid={!!errors.name} // to tell screen readers that this field is currently invalid
              {...register('name', {
                required: 'Name is required',
                validate: value => value !== 'admin' || 'Nice try!',
              })}
            />
            {errors.name && <S.ErrorText>{errors.name.message}</S.ErrorText>}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              id="email"
              type="email"
              hasError={!!errors.email}
              aria-invalid={!!errors.email}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
            />
            {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="password">Password</S.Label>
            <S.Input
              id="password"
              type="password"
              hasError={!!errors.password}
              aria-invalid={!!errors.password}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Minimum 6 characters',
                },
              })}
            />
            {errors.password && (
              <S.ErrorText>{errors.password.message}</S.ErrorText>
            )}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="avatar">Avatar</S.Label>
            <S.Input id="avatar" type="file" {...register('avatar')} />
          </S.Field>

          <S.Button type="submit">Submit</S.Button>
        </S.Form>
      </SF.Container>
    </SF.Section>
  );
};
