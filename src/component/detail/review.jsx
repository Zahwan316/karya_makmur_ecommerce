import React, { useState, useEffect } from 'react';
import CommentCard from '../card/comment_card';

const ReviewComponent = () => {
    return(
        <div className='w-4/6 '>
            <h2 className='mb-6 font-bold text-xl'>Foto & Video Pembeli</h2>
            <div className='flex flex-row gap-4 mb-6'>
                <img src="./img/lemari.jpg" className='w-20 h-20 rounded-lg' />
                <img src="./img/lemari.jpg" className='w-20 h-20 rounded-lg' />
            </div>
            <div>
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
        </div>
    )
}

export default ReviewComponent