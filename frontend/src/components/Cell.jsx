import React from 'react';

function Cell({ data }) {
    return (
        <td
            className='border border-neutral-400 p-3'
            onClick={(event) => { console.log('Clicked on a cell!'); }}>
            {data}
        </td>
    );
}

export default Cell;