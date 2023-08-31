import React from 'react';
import { useUpdateDocMutation } from '../features/apiSlice';

function Cell({ value, record }) {
    const [updateDocument] = useUpdateDocMutation()

    const getKeyByValue = (object, value) => {
        const foundKey = Object.keys(object).find(key => object[key] === value);
        return foundKey || null; // Value not found in the object
    }

    const handleCellClick = async () => {
        const key = getKeyByValue(record, value)
        const updatedDoc = { ...record, marked: [...record.marked, key] }

        await updateDocument(updatedDoc)
    }

    return (
        <td
            className='border border-neutral-400 p-3 hover:bg-slate-300 hover:cursor-pointer'
            onClick={handleCellClick}>
            {value}
        </td>
    );
}

export default Cell;