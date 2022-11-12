import Link from 'next/link';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Layout from './../components/Layout';
import { signIn, useSession } from 'next-auth/react';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';

const RegisterScreen = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,getValues,
    formState: { errors },
  } = useForm();

  const submitHundler = async ({name, email, password }) => {
    try {
        await axios.post('/api/auth/signup', {
            name,
            email,
            password,
        })
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Create Account">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHundler)}
      >
        <h1 className="mb-4 text-xl">Register</h1>

        <div className="mb-4">
          <lable htmlFor="name">Name</lable>
          <input
            type="text"
            className="w-full"
            id="name"
            autoFocus
            {...register('name', { required: 'please enter name' })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-4">
          <lable htmlFor="email">Email</lable>
          <input
            type="email"
            {...register('email', {
              required: 'please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'please enter a valid email',
              },
            })}
            className="w-full"
            id="email"
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-4">
          <lable htmlFor="password">Password</lable>
          <input
            type="password"
            {...register('password', {
              required: 'please enter password',
              minLength: { value: 6, message: 'password is more than 5 chars' },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>

        <div className="mb-4">
          <lable htmlFor="confirmPassword">Confirm Password</lable>
          <input
            className="w-full"
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              required: 'please enter confirm password',
              validate: (value) => value === getValues('password'),
              minLength: { value: 6, message: 'confirm password is more than 5 chars' },
            })}
          
                      ></input>
          {errors.confirmPassword && (
            <div className="text-red-500">{errors.confirmPassword.message}</div>
          )}
          {errors.confirmPassword && errors.confirmPassword.type ==='validate' && (
            <div className='text-red-500'>Password do not match</div>
          )}
        </div>

        <div className="mb-4">
          <button className="primary-button">Register</button>
        </div>
        <div className="mb-4">
          Dont&apos;t have an account? &nbsp;
          <Link href={`/login?redirect=${redirect || '/'}`}>Login</Link>
        </div>
      </form>
    </Layout>
  );
};

export default RegisterScreen;
