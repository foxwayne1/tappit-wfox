// hooks
import useFetch from './hooks/useFetch'
// components
import Table from './component/Table'

function App() {
  const { data, loading } = useFetch()
  // DEBUG
  // console.log(loading, 'LOADING')
  // console.log(data, 'DATA')

  return (
    <div>
      <h1>Tappit Table Challenge</h1>
      <Table data={data} />
    </div>
  )
}

export default App
