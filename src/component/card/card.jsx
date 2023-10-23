import { Box, Card, CardBody, Image, Text } from '@chakra-ui/react';
import { cilPencil, cilStar, cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const CardComponent = (props) => {
    const navigate = useNavigate()

    const redirectToDetail = (e) => {
        let slug = e.target.getAttribute("slug")
        navigate(`../${slug}`)
    }

    return(
      <Box className='w-60 cursor-pointer border border-slate-300 shadow-xl'  borderRadius="xl" boxShadow="md" slug={props.slug}>
        <Image src={props.src} borderTopRadius="xl" className='w-full h-1/2' slug={props.slug} onClick={redirectToDetail}/>
        <Box p="6" slug={props.slug} >
            <Box  className='mb-2' slug={props.slug}>
                <Text noOfLines={2} slug={props.slug}>{props.nama}</Text>
            </Box>
            {
                props.diskon === true &&
                <Box textDecor="line-through" fontSize="13" slug={props.slug}>
                    {props.hargadiskon}
                </Box>
            }
            <Box fontWeight="bold" className='mb-4' slug={props.slug}>
                {props.harga}
            </Box>
            <Box className='flex mb-4' slug={props.slug}>
                <CIcon icon={cilStar} className='w-5 h-5 mr-1'/>
                <span className='mr-4'>{props.rating}</span>
                <span className='mr-4'>|</span>
                <span>{props.terjual} Terjual</span>
            </Box>
            {
                props.role == "pegawai" || props.role == "admin" ?
                <Box className='flex mb-4 gap-4'>
                    <CIcon icon={cilTrash} color="red" className='w-7 h-7' id={props.id} typebtn={"delete"} onClick={props.onclick} />
                    <CIcon icon={cilPencil} color='blue' className='w-7 h-7' id={props.id} typebtn={"edit"} onClick={props.onclick} />
                </Box>
                :
                ""
            }
        </Box>
      </Box>
    )
}

export default CardComponent