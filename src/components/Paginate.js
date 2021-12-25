import React from 'react'
import { Button } from 'react-bootstrap'

export default function Paginate({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            <div>
                {gotoPrevPage && <Button onClick={gotoPrevPage}>Previous</Button>}
                {gotoNextPage && <Button onClick={gotoNextPage}>Next</Button>}
            </div>
        </div>
    )
}
