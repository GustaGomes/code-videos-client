// 'use client';
import { getUserInfo } from '@/app/lib/settings';
import React from 'react';

async function Users() {
  const { age, email, name } = await getUserInfo();
  return (
    <div>
      <h1>Hello mundão Arquivo User</h1>
      <div className='border border-dashed border-red-500 p-4'>
        <p>Name: {name}</p>
        <p> Email: {email}</p>
        <p> Age: {age}</p>
      </div>
    </div>
  );
}

export default Users;
