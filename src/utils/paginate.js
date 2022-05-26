const paginate = data => {
  const peoplePerPage = 3
  const pagesNeeded = Math.ceil(data.length / peoplePerPage)

  const newData = Array.from({ length: pagesNeeded }, (_, index) => {
    const startPagination = index * peoplePerPage
    return data.slice(startPagination, startPagination + peoplePerPage)
  })

  return newData
}

export default paginate
