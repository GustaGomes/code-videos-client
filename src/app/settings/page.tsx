// 'use client';
import React from 'react';
import { getAppSettings } from '../lib/settings';

async function Settings() {
  const { theme, language } = await getAppSettings();
  return (
    <div>
      <h1>Settings page mundão</h1>
      <div className='border border-double border-rose-700 p-4'>
        <p>Theme: {theme}</p>
        <p>Language: {language}</p>
      </div>
    </div>
  );
}

export default Settings;
