import React from 'react';

import { tableData } from '../services/mock_constants';
import Cell from './Cell';
import Row from './Row';

function MainPage() {
    const keys = Object.keys(tableData[0])

    const headers = keys.map((key, idx) => {
        return <th
            key={idx}
            className='border border-neutral-600 p-5 bg-neutral-400'>
            {key}
        </th>
    })

    const records = tableData.map((record, idx) => {
        return <Row key={idx} record={record} index={idx} />
    })

    return (
        <div className='flex justify-content'>
            <table className="border-colapse border w-max">
                <thead>
                    <tr>{headers}</tr>
                </thead>
                <tbody className=''>
                    {records}
                </tbody>
            </table>
        </div>
    );
}

export default MainPage;