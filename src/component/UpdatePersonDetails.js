import { useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdatePersonDetails = ({ idClicked }) => {
  console.log(idClicked)
  const paramDetails = useParams()
  console.log(paramDetails)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isAuthorised, setIsAuthorised] = useState(false)
  const [favSport, setFavSport] = useState([{}])
  const [allDetails, setAllDetails] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    setAllDetails({
      personId: new Date(),
      firstName,
      lastName,
      isEnabled,
      isValid,
      isAuthorised,
    })
    setFirstName('')
    setLastName('')
    setIsEnabled(!isEnabled)
    setIsValid(!isValid)
    setIsAuthorised(!isAuthorised)
  }
  console.log(allDetails)

  const enableHandler = () => {
    setIsEnabled(prevState => {
      return (prevState = !prevState)
    })
  }
  const validHandler = () => {
    setIsValid(prevState => {
      return (prevState = !prevState)
    })
  }
  const authHandler = () => {
    setIsAuthorised(prevState => {
      return (prevState = !prevState)
    })
  }

  return (
    <>
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
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Your First Name'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label
          htmlFor='lastName'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Last Name
        </label>
        <input
          type='text'
          id='firstName'
          aria-describedby='helper-text-explanation'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Your First Name'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />

        <div className='flex items-center mb-4'>
          <label
            htmlFor='enabled'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Enabled
          </label>
          <input
            id='enabled'
            type='checkbox'
            value={isEnabled}
            onChange={enableHandler}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
        </div>

        <div className='flex items-center mb-4'>
          <label
            htmlFor='valid'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Valid
          </label>
          <input
            id='valid'
            type='checkbox'
            value={isValid}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={validHandler}
          />
        </div>

        <div className='flex items-center mb-4'>
          <label
            htmlFor='authorised'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            authorised
          </label>
          <input
            id='authorised'
            type='checkbox'
            value='isAuthorised'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={authHandler}
          />
        </div>
        <div className='flex items-center mb-4'>
          <label
            htmlFor='authorised'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Fav sport
          </label>
          <input
            id='authorised'
            type='checkbox'
            value='isAuthorised'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={authHandler}
          />
          <input
            id='authorised'
            type='checkbox'
            value='isAuthorised'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={authHandler}
          />
          <input
            id='authorised'
            type='checkbox'
            value='isAuthorised'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={authHandler}
          />
        </div>
        <button type='submit'>Cancel</button>
        <button type='submit'>Clear</button>
        <button type='submit'>Save</button>
      </form>
    </>
  )
}

export default UpdatePersonDetails
