import React from 'react'

const TBody = ({ data }) => {
  console.log(data)
  return (
    <tbody>
      {data.map(item => (
        <tr
          key={item.personId}
          className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'
        >
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
            {item.firstName} {item.lastName}
          </td>
          <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
            {item.isEnabled.toString()}
          </td>
          <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
            {item.isValid.toString()}
          </td>
          <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
            {item.isAuthorised.toString()}
          </td>
          <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
            {item.isPalindrome.toString()}
          </td>
          <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
            {item.favouriteSports.map(favSport => (
              <p key={favSport.sportId}>{favSport.name}</p>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default TBody
