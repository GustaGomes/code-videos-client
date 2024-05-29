'use client';

import React from 'react';
import { InputField } from '../InputField';

export default function ForgotPasswordForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('Recuperar senha');
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Recuperar senha</h1>
        <p className='text-sm text-gray-500'>
          Deseja Recuperar sua senha ?{' '}
          <a href='#' className='text-red-500 hover:underline'>
            Soliçitar
          </a>
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          id='email'
          type='email'
          label='Email'
          placeholder='Enter your email'
        />
      </div>
    </form>
  );
}
