import { Avatar } from '@chakra-ui/react';
import { cilStar } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const CommentCard = () => {
    return(
        <div className='w-full bg-slate-200 p-6 rounded-lg mb-6 flex'>
            <div className=' w-12 mr-4'>
               <Avatar />
            </div>
            <div className='w-full  '>
                <div >
                    <p className='font-bold text-xl mb-1'>Lorem Ipsum</p>
                    <div className='flex items-center mb-2'> 
                        <CIcon icon={cilStar} className='w-5 h-5 mr-1' />
                        <span>5.0</span>
                    </div>
                    <div className='mb-4'>
                        <p>29/09/2023</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam, soluta placeat eos ab quisquam neque deserunt, cupiditate dolorum dolorem perferendis possimus modi! Modi fugiat aspernatur quae quasi quos error.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard