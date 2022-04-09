import React from 'react';

export default function Button({ className, icon }) {
  return (
    <button
      type="button"
      className={
        'relative inline-flex items-center px-2 py-2 border border-transparent  text-lg font-medium rounded-md text-white shadow-sm   focus:outline-none focus:ring-2 focus:ring-offset-2 placeholder:' +
        className
      }
    >
      {icon}
    </button>
  );
}
