import React from 'react';

import { useAddDocMutation, useFetchDocsQuery } from '../features/apiSlice';
import { tableData } from '../services/mock_constants';
import Row from './Row';

function MainPage() {
    const { data: docs, isSuccess, isLoading, isError, error } = useFetchDocsQuery()
    const [addDoc] = useAddDocMutation()

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (isError || !isSuccess) {
        return <div>{error}</div>
    }

    if (docs.length === 0)
        return <h1>There are no records in database to display :C</h1>

    const keys = Object.keys(docs[0])
    const headers = keys.map((key, idx) => {
        return <th
            key={idx}
            className='border border-neutral-600 p-5 bg-neutral-400'>
            {key}
        </th>
    })

    const records = docs.map((record, idx) => {
        return <Row key={record._id} record={record} index={idx} />
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
            <button type='button' onClick={async () => await addDoc(tableData[4])}>
                Add document
            </button>
        </div>
    );
}

export default MainPage;