import React, { useEffect, useState } from 'react';
import { useUpdateDocMutation } from '../features/apiSlice';

const getKeyByValue = (object, value) => {
    const foundKey = Object.keys(object).find(key => object[key] === value);
    return foundKey || null; // Value not found in the object
}

function Cell({ value, record }) {
    const [updateDocument] = useUpdateDocMutation()

    const [key, setKey] = useState(null)
    const [isMarked, setIsMarked] = useState(false)

    useEffect(() => {
        const key = getKeyByValue(record, value)
        setKey(key)

        const marked = record.marked.includes(key)
        setIsMarked(marked)
    }, [])

    const handleCellClick = async () => {
        const markedSet = new Set([...record.marked, key])
        setIsMarked(true)

        const updatedDoc = { ...record, marked: [...markedSet] }
        await updateDocument(updatedDoc)
    }

    return (
        <td
            className={`border border-neutral-400 p-3  hover:cursor-pointer ${isMarked ? 'hover:bg-green-500 bg-green-400' : 'hover:bg-slate-300'}`}
            onClick={handleCellClick}>
            {value}
        </td>
    );
}

export default Cell;