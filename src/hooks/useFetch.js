import React, { useEffect, useState } from 'react'

const fetchURL = 'https://run.mocky.io/v3/ceb09528-8228-4a95-b7d9-c1f945023c92'

const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  // DEBUG
  //   console.log(loading, 'LOADING')
  //   console.log(data, 'DATA')

  const getData = async () => {
    const response = await fetch(fetchURL).then(res => res.json())
    setData(response)
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])

  return { loading, data }
}

export default useFetch
