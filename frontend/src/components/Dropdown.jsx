import React, { useState } from 'react';
import { PAYMENT_ENUM, getNewKey } from '../services/mock_constants';
import { useUpdateDocMutation } from '../features/apiSlice';

function DropdownCell({ record }) {
    const [currOption, ] = useState(record.status.current)
    const [updateDocument] = useUpdateDocMutation()

    const onOptionChange = (event) => {
        const newOption = event.target.value

        const updatedDoc = {
            ...record,
            marked: null,
            status: {
                original: record.status.original,
                current: newOption,
            }
        }
        updateDocument(updatedDoc)
    }

    const onButtonClick = () => {
        const origOption = record.status.original

        const updatedDoc = {
            ...record,
            marked: null,
            status: {
                original: origOption,
                current: origOption,
            }
        }
        updateDocument(updatedDoc)
    }

    const clearButton = (
        <td key={getNewKey()}>
            <button
                onClick={onButtonClick}
                className='border border-rounded p-3 hover:bg-neutral-600'>
                X
            </button>
        </td>
    )

    return (
        <td className='flex'>
            <select
                className={`${record.status.original !== currOption ? 'hover:bg-green-500 bg-green-400' : 'hover:bg-slate-300'}`}
                name="status-memu"
                id="status-menu"
                value={currOption}
                onChange={onOptionChange}>
                {PAYMENT_ENUM.map(status => (
                    <option key={getNewKey()} value={status}>{status}</option>
                ))}
            </select>
            {clearButton}
        </td>
    );
}

export default React.memo(DropdownCell);