import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdatePersonForm = ({person}) => {
  console.log(person)
  let navigate = useNavigate()

  const [firstName, setFirstName] = useState(person.firstName)
  const [lastName, setLastName] = useState(person.lastName)
  const [isEnabled, setIsEnabled] = useState(person.isEnabled)
  const [isValid, setIsValid] = useState(person.isValid)
  const [isAuthorised, setIsAuthorised] = useState(person.isAuthorised)
  

  const handleCancel = () => {
    navigate('/', { replace: true })
  }
  return (
    <div className='container mx-auto mt-10'>
      <form onSubmit={e => handleSubmit(e)}>
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
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />

        <label
          htmlFor='lastName'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-10'
        >
          Last Name
        </label>
        <input
          type='text'
          id='lastName'
          aria-describedby='helper-text-explanation'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5'
          placeholder='Your Last Name Goes Here'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <div>
          <div className='flex items-center mb-4 mt-10'>
            <label
              htmlFor='enabled'
              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-10'
            >
              Enabled
            </label>
            <input
              checked={isEnabled}
              value={isEnabled}
              onChange={() => setIsEnabled(!isEnabled)}
              id='enabled'
              type='checkbox'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
          </div>
        </div>
        <div>
          <div className='flex items-center mb-4 mt-10'>
            <label
              htmlFor='valid'
              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-10'
            >
              Valid
            </label>
            <input
              checked={isValid}
              value={isValid}
              onChange={() => setIsValid(!isValid)}
              id='valid'
              type='checkbox'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
          </div>
        </div>

        <div>
          <div className='flex items-center mb-4 mt-10'>
            <label
              htmlFor='authorised'
              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-10'
            >
              Authorised
            </label>
            <input
              checked={isAuthorised}
              value={isAuthorised}
              onChange={() => setIsAuthorised(!isAuthorised)}
              id='authorised'
              type='checkbox'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
          </div>
        </div>
        <div>
          <div className='flex items-center mb-4 mt-10'>
            <label
              htmlFor='authorised'
              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-10'
            >
              Palindrome
            </label>
            <input
              checked={isAuthorised}
              value={isAuthorised}
              onChange={() => setIsAuthorised(!isAuthorised)}
              id='authorised'
              type='checkbox'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
          </div>
        </div>
        <button onClick={handleCancel}>Cancel</button>
        <button>Save</button>
      </form>
  )
}

export default UpdatePersonForm
