import React from 'react';

import { useFetchDocsQuery } from '../features/apiSlice';
import { tableData } from '../services/mock_constants';
import Row from './Row';

function MainPage() {
    const { data: docs, isSuccess, isLoading, isError, error } = useFetchDocsQuery()

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (isError || !isSuccess) {
        return <div>{error}</div>
    }

    const keys = Object.keys(docs[0])
    const headers = keys.map((key, idx) => {
        return <th
            key={idx}
            className='border border-neutral-600 p-5 bg-neutral-400'>
            {key}
        </th>
    })

    const records = docs.map((record, idx) => {
        return <Row key={idx} record={record} index={idx} />
    })

    return (
        <div className='flex justify-content flex-col'>
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