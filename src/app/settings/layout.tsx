import React from 'react';
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div lang='en'>
      <h1 className='text-3xl '>layout Whapper</h1>
      <div className=' border border-double border-sky-500 p-4'>{children}</div>
    </div>
  );
}
