import React, {useState} from 'react'

export default function SelectDate() {
    const [date, setDate] = useState();

    return (
        <div>
            <h1>Selected Date: {date}</h1>
            <input type='date' onChange={e => setDate(e.target.value)}/>
        </div>
    )
}