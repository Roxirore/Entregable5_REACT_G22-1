import React from 'react'
import './pagination.css'

const Pagination = ( {page, maxPage, setPage} ) => {

    const pagesPerBlock = 5
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const maxBlock = Math.ceil(maxPage / pagesPerBlock)

    const arrPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const finalPage = maxBlock === currentBlock ? maxPage : currentBlock * pagesPerBlock
    for (let i = initialPage; i <= finalPage; i++) {
        arrPages.push(i)
    }

const handlePage = number => {
    setPage(number)
}

const handlePrevious = () => {
    if (page - 1 > 0) {
        setPage(page - 1)
    }
}

const handleNext = () => {
    if (page + 1 !== maxPage) {
        setPage(page + 1)
    }
}

  return (
    <div> 
        <ul className='pagination'>
            <li><button className='pagination__btn' onClick={handlePrevious}>&#60;&#60;</button></li>
            {
                arrPages.map(e => (
                    <li><button className='pagination__btn' onClick={() => handlePage(e)}key={e}> {e} </button> </li>
                    ))
                }
            <li><button className='pagination__btn' onClick={handleNext}>&#62;&#62;</button></li>
        </ul>
    </div>
  )
}

export default Pagination