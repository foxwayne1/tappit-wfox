import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// custom hooks
import useFetch from '../hooks/useFetch'
import UpdatePersonForm from './UpdatePersonForm'

const UpdatePersonDetails = () => {
  const paramsId = useParams()
  const { loading, allData } = useFetch()

  const [personDetails, setPersonDetails] = useState([])

  useEffect(() => {
    if (loading) return
    setPersonDetails([allData[paramsId.id - 1]])
  }, [loading, allData, paramsId])
  // console.log(personDetails)

  if (loading) return <h1>Loading...</h1>
  return (
    <div>
      {personDetails.map(person => (
        <UpdatePersonForm key={person.personId} person={person} />
      ))}
    </div>
  )
}

export default UpdatePersonDetails
