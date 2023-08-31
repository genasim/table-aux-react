import React from 'react';
import { useDeleteDocMutation } from '../features/apiSlice';
import Cell from './Cell';

function Row({ record, index }) {
    const [deleteDoc, { isLoading }] = useDeleteDocMutation()

    const keys = Object.keys(record)
    const records = keys
        .slice(0, keys.length - 1)
        .map((key, idx) => {
            return <Cell key={idx + 1} prop={key} value={record[key]} record={record} />
        })

    const button = (
        <td key={0}>
            <button
                onClick={async () => await deleteDoc(record._id)}
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