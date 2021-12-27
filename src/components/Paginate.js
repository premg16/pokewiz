import React from 'react'
import { Button } from 'react-bootstrap'

export default function Paginate({ gotoNextPage, gotoPrevPage }) {
    return (
        <>
            <div className='w-100 justify-content-between d-flex'>
                {gotoPrevPage && <Button onClick={gotoPrevPage} className="my-2">Previous</Button>}
                {gotoNextPage && <Button onClick={gotoNextPage} className="my-2">Next</Button>}
            </div>
        </>
    )
}
