import React, { useEffect, useState } from 'react';
import { PAYMENT_ENUM, getNewKey } from '../services/mock_constants';

function DropdownCell({ record }) {
    const [value, setValue] = useState()

    useEffect(() => {
        // console.log(record);
        // const tempValue = record.status.current
    }, [])

    return (
        <td>
            <select name="status-memu" id="status-menu" value={value}>
                {PAYMENT_ENUM.map(status => (
                    <option key={getNewKey()} value={status}>{status}</option>
                ))}
            </select>
        </td>
    );
}

export default React.memo(DropdownCell);