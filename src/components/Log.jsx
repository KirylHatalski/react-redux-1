import React, {PropTypes} from 'react'

function dateParse(timestamp) {
    let date = new Date(timestamp);
    return date.toTimeString()
}

const Log = ({history, path, setActive}) => {
    if (history.length > 0) {
        return (
            <div className='history'>
                <table>
                    <thead>
                        <tr>
                            <th>When:</th>
                            <th>From:</th>
                            <th>To:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((val, index) => {
                            return (
                                <tr key={index} onClick={() => setActive(val)}>
                                    <td>
                                        {dateParse(val.time)}
                                    </td>
                                    <td>
                                        {`${val.input.value} ${val.input.name}`}
                                    </td>
                                    <td>
                                        {`${val.output.value} ${val.output.name}`}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div className='history'>
                log empty
            </div>
        )
    }
}

export default Log;
