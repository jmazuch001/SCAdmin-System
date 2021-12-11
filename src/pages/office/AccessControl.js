import React from 'react'
import QR_Code from '../../Components/QR_Code'
import QRCode from 'qrcode'

// styles
// import styles from 'src\pages\office\AccessControl.module.css'


export default function AccessControl() {
    return (
        <div>
            <QR_Code text='https://github.com/jmazuch001'>
                This is my text
            </QR_Code>
        </div>
    )
}

