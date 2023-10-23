import React, { useState, useEffect } from 'react';
import CardComponent from '../../card/card';
import { Skeleton } from '@chakra-ui/react';

const ProdukTerlarisComponent = (props) => {
    const orderBarangBySell = props.databarang.sort((a,b) =>
        b.terjual - a.terjual
    )

    const databarang = orderBarangBySell.slice(0,4)

    return(
        <div className='mb-5'>
            <h2 className='font-bold mb-4 text-lg'>Produk Terlaris</h2>
            <div className='flex flex-wrap gap-6 '>
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
                    databarang.map((item,index) =>
                        <CardComponent
                            src={`${process.env.REACT_APP_URL_API}img/${item.gambar}`}
                            nama={item.nama}
                            harga={`Rp${props.formatharga(item.harga_asli)}`}
                            rating={item.rating}
                            terjual={item.terjual}
                            key={index}
                        />
                        
                    )
                }

            </div>
        </div>
    )
}

export default ProdukTerlarisComponent