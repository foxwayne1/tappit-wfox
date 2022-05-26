import { useParams } from 'react-router-dom'

const UpdatePersonDetails = () => {
  const paramDetails = useParams()
  console.log(paramDetails)
  return <div>UpdatePersonDetails</div>
}

export default UpdatePersonDetails
