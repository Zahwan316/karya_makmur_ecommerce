import { Button } from '@chakra-ui/react';
import { cilMinus, cilPlus } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const CardFloating = (props) => {
    const[stock,setstock] = useState(1)

    const increaseStock = () => {
        setstock(prev => prev + 1)
    }

    const decreaseStock = () => {
        setstock(prev => prev - 1)
    }

    useEffect(() => {
        if(stock < 0){
            setstock(0)
        }
    },[stock])

    return(
       <div className='rounded-lg ml-12 w-64 h-34 border p-5' style={{borderColor:"#C8C8C8"}}>
        {
            props.page === "detail" &&
            <>
                <h2 className='font-bold text-xl mb-3'>Atur Jumlah</h2>
                <div className='flex items-center'>
                    <p>Jumlah : </p>
                    <div className='w-5 h-5 mx-3 cursor-pointer' onClick={decreaseStock}>
                        <CIcon icon={cilMinus} size="sm"/>
                    </div>
                    <span>{stock}</span>
                    <div className='w-5 h-5 mx-3 cursor-pointer'  onClick={increaseStock}>
                        <CIcon icon={cilPlus} size="sm"/>
                    </div>
                </div>
                <div className='flex mb-8'>
                    <p className='mr-2'>Stok : </p>
                    <span className='font-bold'>500</span>
                </div>
                <div className='flex items-center mb-4'>
                    <p className='text-xl mr-2'>Total : </p>
                    <h2 className='font-bold text-2xl'>Rp2.000.000</h2>
                </div>
                <div className='flex flex-col gap-3'>
                    <Button style={{backgroundColor:"#B0D9B1",color:"white"}} >+ Keranjang</Button>
                    <Button variant="outline" style={{borderColor:"#B0D9B1",color:"#B0D9B1"}}>Beli</Button>
                </div>
            </>
        }
       </div>
    )
}

export default CardFloating