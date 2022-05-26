import React from 'react'

const THead = () => {
  return (
    <thead className='bg-white border-b'>
      <tr>
        <th
          scope='col'
          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
        >
          Name
        </th>
        <th
          scope='col'
          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
        >
          Enabled
        </th>
        <th
          scope='col'
          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
        >
          Valid
        </th>
        <th
          scope='col'
          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
        >
          Authorised
        </th>
        <th
          scope='col'
          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
        >
          Palindrome
        </th>
        <th
          scope='col'
          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
        >
          Favorite Sport
        </th>
      </tr>
    </thead>
  )
}

export default THead
