import React from 'react'

const Input = ({ htmlfor, text, className }) => {
  console.log(className)
  return (
    <>
      <label htmlFor={htmlfor}>{text}</label>
      <label
        htmlFor='firstName'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        First Name
      </label>
      <input
        type='text'
        id='firstName'
        aria-describedby='helper-text-explanation'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5'
        placeholder='Your First Name Goes Here'
        // value={firstName}
        // onChange={e => setFirstName(e.target.value)}
      />
    </>
  )
}

export default Input
