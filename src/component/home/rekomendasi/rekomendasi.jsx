import React, { useState, useEffect } from 'react';
import CardComponent from '../../card/card';
import { Skeleton } from '@chakra-ui/react';

const RekomendasiComponent = (props) => {
    return(
        <div>
            <h2 className='font-bold text-lg mb-4'>Rekomendasi Untukmu</h2>
            <div className='flex flex-wrap gap-6'>
                {
                    !props.isload ?
                    <>
                        <Skeleton height={"230px"} width={"250px"}>
                        </Skeleton>
                        <Skeleton height={"250px"} width={"250px"}>
                        </Skeleton>
                        <Skeleton height={"250px"} width={"250px"}>
                        </Skeleton>
                        <Skeleton height={"250px"} width={"250px"}>
                        </Skeleton>
                    </>
                    :
                    props.databarang ?
                    props.databarang.map((item,index) =>
                        <CardComponent
                            src={`${process.env.REACT_APP_URL_API}img/${item.gambar}`}
                            nama={item.nama}
                            harga={`Rp${props.formatharga(item.harga_asli)}`}
                            rating={item.rating}
                            terjual={item.terjual}
                            slug={item.slug}
                            key={index}
                        />
                    )
                    :
                    ""
                }
               
                
            </div>
        </div>
    )
}

export default RekomendasiComponent