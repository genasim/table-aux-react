import React from 'react';

import { tableData } from '../services/mock_constants';

function MainPage() {
    const headers = tableData.map((record, inx) => {

    })

    return (
        <div>
            <table class="table-auto border-seperate border-slate-600 border flex justify-content">
                <thead>
                    <tr>
                        <th className='border border-slate-600'>Song</th>
                        <th className='border border-slate-600'>Artist</th>
                        <th className='border border-slate-600'>Year</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MainPage;