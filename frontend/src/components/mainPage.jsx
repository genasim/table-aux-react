import React from 'react';

import { useAddDocMutation, useFetchDocsQuery } from '../features/apiSlice';
import { getNewKey, getRandomRecord } from '../services/mock_constants';
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

    const addDocButton = (
        <button type='button' onClick={async () => await addDoc(getRandomRecord())}>
            Add document
        </button>
    )

    if (docs.length === 0)
        return (
            <div>
                {addDocButton}
                <h1>There are no records in database to display :C</h1>
            </div>
        )


    //  Generate Table Bellow
    const keys = Object.keys(docs[0])
    const headers = keys
        .filter(key => key !== 'marked')
        .map((key) => {
            return <th
                key={getNewKey()}
                className='border border-neutral-600 p-5 bg-neutral-400'>
                {key}
            </th>
        })

    const records = docs.map((record, idx) => {
        return <Row key={getNewKey()} record={record} index={idx} />
    })

    return (
        <div className='flex justify-content flex-col'>
            {addDocButton}

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