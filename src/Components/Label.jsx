import React from 'react'

function Label({labelText, htmlFor}) {
  return <label className="block text-gray-700 mb-1" htmlFor={htmlFor}>
              {labelText}
            </label>
}

export default Label