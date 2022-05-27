import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdatePersonForm = ({ person }) => {
  let navigate = useNavigate()

  const [newPerson, setNewPerson] = useState(person)
  const [firstName, setFirstName] = useState(newPerson.firstName)
  const [lastName, setLastName] = useState(newPerson.lastName)
  const [isEnabled, setIsEnabled] = useState(newPerson.isEnabled)
  const [isValid, setIsValid] = useState(newPerson.isValid)
  const [isAuthorised, setIsAuthorised] = useState(person.isAuthorised)
  const [isPalindrome, setIsPalindrome] = useState(person.isPalindrome)

  const handleCancel = () => {
    navigate('/', { replace: true })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newDataObj = {
      personId: Math.random() * 1000,
      firstName,
      lastName,
      isEnabled,
      isValid,
      isAuthorised,
      isPalindrome,
    }
    setNewPerson(newDataObj)
  }

  return (
    <div className='container mx-auto mt-10'>
      <form onSubmit={e => handleSubmit(e)}>
        <label
          htmlFor='firstName'
          className='block text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          First Name
        </label>
        <input
          type='text'
          id='firstName'
          aria-describedby='helper-text-explanation'
          className='inline bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5'
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
              htmlFor='planidrome'
              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-10'
            >
              Palindrome
            </label>
            <input
              checked={isPalindrome}
              value={isPalindrome}
              onChange={() => setIsPalindrome(!isPalindrome)}
              id='planidrome'
              type='checkbox'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
          </div>
        </div>
        <button
          className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
          Save
        </button>
      </form>
    </div>
  )
}

export default UpdatePersonForm
