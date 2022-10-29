import React from 'react';

import QrCode from 'react-native-qrcode-svg';
import { QrContainer, QrMessage  } from './QrCode.styles';

const QrCodePage = () => {
  return(
    <QrContainer>
        <QrMessage>Este é seu QR-CODE para pagamentos</QrMessage>
        <QrCode value='132.353.639-63' size={250}/>
    </QrContainer>
  )
}

export default QrCodePage;