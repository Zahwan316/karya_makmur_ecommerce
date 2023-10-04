import { cilStar } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';
import RatingComponent from './rating';
import ReviewComponent from './review';

const RatingCommentComponent = () => {
    return(
        <>
           <h2 className='font-bold text-xl mb-6'>Ulasan Pembeli</h2>
           <div className='flex gap-10'>
             <RatingComponent />
             <ReviewComponent />
           </div>
        </>
    )
}

export default RatingCommentComponent