'use client';
import React, { useState } from 'react';

export default function BugButton() {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    throw new Error('Error in App');
  }

  return (
    <>
      <button
        className='rounded bg-red-500 px-4 py-2 font-bold text-white'
        onClick={() => setClicked(true)}
      >
        Chamador de Bug
      </button>
    </>
  );
}
