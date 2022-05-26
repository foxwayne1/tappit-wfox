import { Link } from 'react-router-dom'

const Pagination = ({ pageData, onChange }) => {
  return (
    <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
        <div>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'
          >
            {pageData.map((paginationNumber, i) => (
              <Link
                key={i}
                to='/'
                aria-current='page'
                className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                onClick={() => onChange(i)}
              >
                {i + 1}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
