import { Box, Skeleton } from '@chakra-ui/react';
import { cilArrowCircleRight } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KategoryComponent = (props) => {
    const navigate = useNavigate()
    const redirectToKategoriPage = () => {
        navigate("/kategori")
    }

    const datakategori = props.datakategori.slice(0,4)

    return(
        <div>
             <h2 className='font-bold mb-4 text-lg'>Kategori</h2>
            <div className='flex xl:flex-row 2xl:flex-row md:flex-row lg:flex-row gap-6 sm:flex-col flex-col mb-6'>
                {
                    !props.isload ?
                    <>
                        <Skeleton height={"250px"} width={"250px"}>
                        </Skeleton>
                        <Skeleton height={"250px"} width={"250px"}>
                        </Skeleton>
                        <Skeleton height={"250px"} width={"250px"}>
                        </Skeleton>
                        <Skeleton height={"250px"} width={"250px"}>
                        </Skeleton>
                    </>
                    :
                    datakategori.map((item,index) =>
                        <Box key={index} className='w-64 h-64 rounded-2xl flex justify-center items-center cursor-pointer'>
                            <img src={`${process.env.REACT_APP_URL_API}img/${item.img}`} className='w-full h-full rounded-2xl hover:bg-sky-800' style={{filter:"brightness(0.6)"}} />
                            <p className='absolute font-bold text-white '>{item.nama}</p>
                        </Box>
                    )
                }
               
                <div className='w-10 flex align-middle'>
                    <CIcon icon={cilArrowCircleRight} size="sm" className='cursor-pointer' onClick={redirectToKategoriPage}/>
                </div>
            </div>
        </div>
    )
}

export default KategoryComponent