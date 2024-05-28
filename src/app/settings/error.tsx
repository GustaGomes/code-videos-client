'use client';
import React, { useEffect } from 'react';

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.error('Pelé error', error);
  }, [error]);

  return (
    <div className='text-red-500'>
      <h1>Erro 404</h1>
      <p>Página não encontrada</p>
    </div>
  );
}
