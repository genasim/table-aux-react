import React, { useEffect, useState } from 'react';

import { useAddDocMutation, useFetchDocsQuery } from '../features/apiSlice';
import { getNewKey, getRandomRecord } from '../services/mock_constants';
import Row from './Row';

function Table() {
    const [filter, setFilter] = useState('all')
    const [page, setPage] = useState(1)

    const { data: docs, isSuccess, isLoading, isError, error } = useFetchDocsQuery({filter, page, size: 10})
    const [addDoc] = useAddDocMutation()

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (isError || !isSuccess) {
        return <div>Failed to fetch data <br /> {error && ''}</div>
    }

    const addDocButton = (
        <button
            className='w-1/2'
            type='button' onClick={async () => await addDoc(getRandomRecord())}>
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

    const onFilterChange = (event) => setFilter(event.target.value)

    return (
        <div className='flex flex-col'>
            {addDocButton}

            <div className='w-2/5'>
                <label htmlFor="table-filter">Filter results</label>
                <select
                    className='m-3 p-4 border border-slate-500'
                    name="table-filter"
                    id="table-filter"
                    onChange={onFilterChange}
                    value={filter}>
                    <option value="all">All</option>
                    <option value="marked">Marked</option>
                    <option value="unchanged">Unchanged</option>
                </select>
            </div>

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

export default Table;