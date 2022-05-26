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

  useEffect(() => {
    if (loading) return
    setPeople(data[page])
  }, [loading, page, data])

  const handlePageChange = indexNumber => {
    console.log(indexNumber)
    return setPage(indexNumber)
  }

  const prevButton = indexNumber => {
    if (page < 0) {
      return setPage(page.length - 1)
    }
  }
  const nextButton = indexNumber => {
    if (page > page.length) {
      return setPage(0)
    }
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
              prevButton={prevButton}
              nextButton={nextButton}
            />
          }
        />
        <Route path='/person/:id' element={<UpdatePersonDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
