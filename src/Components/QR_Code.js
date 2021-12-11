import QRCode from 'qrcode'
import React, { useEffect, useState } from 'react'

// styles


const QR_Code = ({ text }) => {
    const [source, setSource] = useState('');    

    useEffect(() => {
        QRCode.toDataURL(text).then((data) => {
            setSource(data);
        })
    }, [])

    return (
        <div>
            <img src={source}/>
            This is some text;
        </div>
    )
}

export default QR_Code;