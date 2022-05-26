import { useState, useEffect } from 'react'
// custom hooks
import useFetch from './hooks/useFetch'
// components
import Table from './component/Table'

function App() {
  const { data, loading } = useFetch()
  const [page, setPage] = useState(0)
  const [people, setPeople] = useState([])

  useEffect(() => {
    if (loading) return
    setPeople(data[page])
  }, [loading, page])

  const handlePageChange = indexNumber => {
    console.log(indexNumber)
    return setPage(indexNumber)
  }

  return (
    <div>
      <h1>Tappit Table Challenge</h1>
      <Table
        data={people}
        pageNumber={page}
        pageData={data}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default App
