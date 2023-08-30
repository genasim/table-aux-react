import React from 'react';
import Cell from './Cell';
import { useDeleteDocMutation, useFetchDocsQuery } from '../features/apiSlice';

function Row({ record, index }) {
    const [deleteDoc, { isLoading }] = useDeleteDocMutation()

    const handleDeleteButton = () => {
        deleteDoc(record._id)
    }

    const records = Object.keys(record).map((key, idx) => {
        return <Cell key={idx+1} data={record[key]} />
    })
    const button = (
        <td key={0}>
            <button
                onClick={handleDeleteButton}
                disabled={isLoading}
                className='border border-rounded p-3 hover:bg-neutral-600'>
                X
            </button>
        </td>
    )

    return (
        <tr className={index % 2 === 0 ? 'bg-neutral-100' : 'bg-neutral-200'}>
            {records.concat(button)}
        </tr>
    );
}

export default Row;