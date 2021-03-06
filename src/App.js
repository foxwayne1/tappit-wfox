import { useState, useEffect } from 'react'
// custom hooks
import useFetch from './hooks/useFetch'
// components
import Table from './component/Table'
import UpdatePersonDetails from './component/UpdatePersonDetails'
// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const { data, loading } = useFetch()
  const [page, setPage] = useState(0)
  const [people, setPeople] = useState([])
  const [personId, setPersonId] = useState(null)

  useEffect(() => {
    if (loading) return
    setPeople(data[page])
  }, [loading, page, data, personId])

  const handlePageChange = indexNumber => {
    return setPage(indexNumber)
  }
  const handlePersonClick = id => {
    setPersonId(id - 1)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Table
              data={people}
              pageNumber={page}
              pageData={data}
              onChange={handlePageChange}
              handlePersonClick={handlePersonClick}
            />
          }
        />
        <Route path='/person/:id' element={<UpdatePersonDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
