// 'use client';
import { getUserById } from '@/app/lib/settings';
import { notFound } from 'next/navigation';
import React from 'react';

async function Users({ params }: { params: { id: string } }) {
  const { address, email, id, name, phone, company } = await getUserById(
    params.id
  );

  if (!name) {
    notFound();
  }
  return (
    <>
      <div>
        <h1> User {params.id}</h1>
        <div className='border border-dashed border-red-500 p-4'>
          <p>Id: {id}</p>
          <p>Name: {name}</p>
          <p> Email: {email}</p>
          <p> Address: {address.street}</p>
          <p> Phone: {phone}</p>
          <p> Company: {company.name}</p>
        </div>
      </div>
    </>
  );
}

export default Users;
