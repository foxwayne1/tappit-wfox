import React from 'react'
import Pagination from './Pagination'
import TBody from './TBody'
import THead from './THead'

const Table = ({
  data,
  pageNumber,
  pageData,
  onChange,
  nextButton,
  prevButton,
}) => {
  return (
    <>
      <h1>Tappit Table Challenge</h1>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full'>
                <THead />
                <TBody data={data} />
                <Pagination
                  pageNumber={pageNumber}
                  pageData={pageData}
                  onChange={onChange}
                  prevButton={prevButton}
                  nextButton={nextButton}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
