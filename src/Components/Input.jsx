import React from 'react'

function Input({type, id, name, value, placeholder}) {
  return            <input
              type={type}
              id={id}
              name={name}
              // value={values.email}
             
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={placeholder}
            />
}

export default Input