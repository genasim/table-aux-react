import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { useDeleteDocMutation } from '../features/apiSlice';
import Cell from './Cell';
import DropdownCell from './Dropdown';

function Row({ record, index }) {
    const [deleteDoc, { isLoading }] = useDeleteDocMutation()

    const keys = Object.keys(record)
        .filter(key => key !== 'marked')
    const records = keys
        .map((key, idx) => {
            //  Last cell should be the Dropdown menu
            if (idx === keys.length - 1) {
                return <DropdownCell />
            }

            //  All other cells are regular
            return <Cell key={idx + 1} prop={key} value={record[key]} record={record} />
        })

    const clearButton = (
        <td key={0}>
            <button
                disabled={isLoading}
                className='border border-rounded p-3 hover:bg-neutral-600'>
                X
            </button>
        </td>
    )

    const deleteButton = (
        <td key={0}>
            <button
                onClick={async () => await deleteDoc(record._id)}
                disabled={isLoading}
                className='border border-rounded p-3 hover:bg-neutral-600'>
                <BsFillTrashFill size={21} />
            </button>
        </td>
    )

    return (
        <tr className={index % 2 === 0 ? 'bg-neutral-100' : 'bg-neutral-200'}>
            {records.concat(clearButton, deleteButton)}
        </tr>
    );
}

export default Row;