import React from 'react'
import TBody from './TBody'
import THead from './THead'

const Table = ({ data }) => {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full'>
              <THead />
              <TBody data={data} />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
