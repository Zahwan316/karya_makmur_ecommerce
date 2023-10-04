import { Progress } from '@chakra-ui/react';
import { cilStar } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const RatingComponent = () => {
    return(
        <div className='w-64 '>
            <div className='flex items-center mb-8'>
                <CIcon icon={cilStar} className='w-12 h-12 mr-2' />
                <p className='font-bold text-4xl'>5.0</p>
                <span>/5.0</span>
            </div>
            <div className='flex-col flex gap-3'>
                <div className='flex items-center'>
                    <CIcon icon={cilStar} className='w-5 h-5 mr-1' />
                    <p className='mr-2'>5</p>
                    <div className='w-1/2 mr-2'>
                        <Progress value={100} colorScheme='green'/>
                    </div>
                    <p>200</p>
                </div>
                <div className='flex items-center'>
                    <CIcon icon={cilStar} className='w-5 h-5  mr-1' />
                    <p className='mr-2'>4</p>
                    <div className='w-1/2 mr-2'>
                        <Progress value={100} colorScheme='green'/>
                    </div>
                    <p>200</p>
                </div>
                <div className='flex items-center'>
                    <CIcon icon={cilStar} className='w-5 h-5  mr-1' />
                    <p className='mr-2'>3</p>
                    <div className='w-1/2 mr-2'>
                        <Progress value={100} colorScheme='green'/>
                    </div>
                    <p>200</p>
                </div>
                <div className='flex items-center'>
                    <CIcon icon={cilStar} className='w-5 h-5 mr-1' />
                    <p className='mr-2'>2</p>
                    <div className='w-1/2 mr-2'>
                        <Progress value={100} colorScheme='green'/>
                    </div>
                    <p>200</p>
                </div>
                <div className='flex items-center'>
                    <CIcon icon={cilStar} className='w-5 h-5 mr-1' />
                    <p className='mr-2'>1</p>
                    <div className='w-1/2 mr-2'>
                        <Progress value={100} colorScheme='green'/>
                    </div>
                    <p>200</p>
                </div>
            </div>
        </div>
    )
}

export default RatingComponent;