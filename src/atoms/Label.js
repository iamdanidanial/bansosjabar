import React from 'react';

export default function Label({ htmlFor, className, value, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block font-semibold text-sm text-gray-700 ` + className}
    >
      {value ? value : { children }}
    </label>
  );
}
