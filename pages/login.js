import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from './../components/Layout';

const LoginScreen = () => { 
    const {
        handleSubmit,
        register,
        formState: { errors}, } = useForm();

        const submitHundler = ({ email, password }) => {

        }

  return (
    <Layout title="Login">
        <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHundler)}>
            <h1 className="mb-4 text-xl">Login</h1>
            <div className="mb-4">
                <lable htmlFor="email">Email</lable>
                <input type="email" 
                {...register('email',{required: 'please enter email',
            pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
            message: "please enter a valid email",
        }})}
                className='w-full' id="email" autoFocus></input>
                {errors.email && (<div className='text-red-500'>{errors.email.message}</div>)}
            </div>
            <div className="mb-4">
                <lable htmlFor="password">Password</lable>
                <input type="password"
                {...register('password',{ required: 'please enter password',
            minLength: { value: 6, message: 'password is more than 5 chars'}, })}
                className='w-full' id="password" autoFocus></input>
                 {errors.password && (<div className='text-red-500'>{errors.password.message}</div>)}

            </div>  
            <div className="mb-4">
                <button className="primary-button">Login</button>
            </div>
            <div className="mb-4">
                Dont&apos;t have an account: &nbsp;
                <Link href="register">Register</Link>
            </div>


        </form>
    </Layout>
  )
}

export default LoginScreen