import React, { useState } from 'react';

import { useAddDocMutation, useFetchDocsQuery } from '../features/apiSlice';
import { getNewKey, getRandomRecord } from '../services/mock_constants';
import Row from './Row';

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function Table() {
    const [filter, setFilter] = useState('all')
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)

    const { data: docs, isSuccess, isLoading, isError, error } = useFetchDocsQuery({ filter, page, size })
    const [addDoc] = useAddDocMutation()

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (isError || !isSuccess) {
        return <div>Failed to fetch data <br /> {error && ''}</div>
    }

    const addDocButton = (
        <button
            className='bg-neutral-300 border border-neutral-600 border-rounded m-3 px-4'
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
    const keys = Object.keys(docs.results[0])
    const headers = keys
        .filter(key => key !== 'marked')
        .map((key) => {
            return <th
                key={getNewKey()}
                className='border border-neutral-600 p-5 bg-neutral-400'>
                {key}
            </th>
        })

    const records = docs.results.map((record, idx) => {
        return <Row key={getNewKey()} record={record} index={idx} />
    })

    const onFilterChange = (event) => {
        setFilter(event.target.value)
        setPage(1)
    }
    const onPageChange = (event) => {
        let newPage = event.target.value
        const maxPages = Math.ceil(docs.filteredCount / size)
        newPage = clamp(newPage, 1, maxPages)

        setPage(newPage)
    }

    return (
        <div className='flex flex-col'>
            <div className='flex justify-around'>
                {addDocButton}
                <div>
                    <label htmlFor="table-filter">Filter results</label>
                    <select
                        className='m-3 p-4 bg-neutral-100 border border-slate-500'
                        name="table-filter"
                        id="table-filter"
                        onChange={onFilterChange}
                        value={filter}>
                        <option value="all">All</option>
                        <option value="marked">Marked</option>
                        <option value="unchanged">Unchanged</option>
                    </select>
                </div>


                <div>
                    <label htmlFor="results-page">Page</label>
                    <input
                        className='bg-neutral-100 m-4 p-3 border border-neutral-400'
                        id='results-page'
                        value={page}
                        onChange={onPageChange}
                        type="number" />
                </div>
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