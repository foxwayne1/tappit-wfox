import useFetch from './hooks/useFetch'

function App() {
  const { data, loading } = useFetch()
  // DEBUG
  console.log(loading, 'LOADING')
  console.log(data, 'DATA')

  return (
    <div>
      <h1>Hello Tappit</h1>
    </div>
  )
}

export default App
