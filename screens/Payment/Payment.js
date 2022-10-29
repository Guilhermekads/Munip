import React, {useState} from 'react';
import { View } from 'react-native';
import DetailsPayment from './DetailsPayment';
import Scanner from './Scanner';

// import { Container } from './styles';

const Payment = () => {
  const [IsScanned, setIsScanned] = useState(false);

    function Scan(){
        setIsScanned(true)
    }

  return(
    <>
    {!IsScanned ? (<Scanner IsScanned={Scan}/>) : (<DetailsPayment/>)}
    </>
  )
}

export default Payment;