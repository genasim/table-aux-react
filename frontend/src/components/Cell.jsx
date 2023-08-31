import React from 'react';
import { useUpdateDocMutation } from '../features/apiSlice';

function Cell({ value, record }) {
    const [updateDocument] = useUpdateDocMutation()

    const getKeyByValue = (object, value) => {
        const foundKey = Object.keys(object).find(key => object[key] === value);
        return foundKey || null; // Value not found in the object
    }

    const handleCellClick = () => {
        if (record.marked === undefined) {
            const key = getKeyByValue(record, value)
            record.marked = [key]
            updateDocument(record)
            return
        }


    }

    return (
        <td
            className='border border-neutral-400 p-3 hover:bg-slate-300 hover:cursor-pointer'
            onClick={() => {
                handleCellClick()
                console.log({
                    record,
                    key: getKeyByValue(record, value)
                })
            }
            }>
            {value}
        </td>
    );
}

export default Cell;