import React from 'react';

import { tableData } from '../services/mock_constants';

function MainPage() {
    const keys = Object.keys(tableData[0])

    const headers = keys.map((key, idx) => {
        return <th
            key={idx}
            className='border p-5'>
            {key}
        </th>
    })

    const records = tableData.map((record, idx) => {
        return (
            <tr key={idx}>
                {Object.keys(record).map((key, idx) => {
                    return <td key={idx} className='border p-3'>{record[key]}</td>
                })}
            </tr>
        )
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