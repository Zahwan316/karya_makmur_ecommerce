import React, { useState, useEffect } from 'react';
import NavComponent from '../nav/nav';

const DefaultLayout = (props) => {
    return(
        <>
            <NavComponent />  
            <main className='w-full flex justify-center min-h-full py-28'>
                <div className='xl:w-2/3 2xl:w-2/3 lg:w-1/2 md:w-1/2'>
                    {props.children}
                </div>
            </main>
        </>
    )
}

export default DefaultLayout;