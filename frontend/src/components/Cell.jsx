import React, { useEffect, useState } from 'react';
import { useUpdateDocMutation } from '../features/apiSlice';

function Cell({ prop, value, record }) {
    const [updateDocument] = useUpdateDocMutation()

    const [isMarked, setIsMarked] = useState(record.marked === prop)

    useEffect(() => {
        const marked = record.marked === prop
        setIsMarked(marked)
    }, [record.marked])

    const handleCellClick = async () => {
        setIsMarked(true)
        // record.marked = prop

        const updatedDoc = { ...record, marked: prop }
        await updateDocument(updatedDoc)
    }

    return (
        <td
            className={`border border-neutral-400 p-3 hover:cursor-pointer 
                ${isMarked ? 'hover:bg-green-500 bg-green-400' : 'hover:bg-slate-300'}`}
            onClick={handleCellClick}>
            {value}
        </td>
    );
}

export default React.memo(Cell);