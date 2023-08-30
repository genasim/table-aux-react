import React from 'react';
import Cell from './Cell';

function Row({ record, index }) {
    return (
        <tr className={index % 2 === 0 ? 'bg-neutral-100' : 'bg-neutral-200'}>
            {Object.keys(record).map((key, idx) => {
                return <Cell key={idx} data={record[key]} />
            })}
        </tr>
    );
}

export default Row;