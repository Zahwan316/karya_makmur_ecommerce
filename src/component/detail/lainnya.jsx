import React, { useState, useEffect } from 'react';
import CardComponent from '../card/card';

const LainnyaDetailComponent = (props) => {
    const formatter = Intl.NumberFormat("id-ID",{
        style:"decimal",
        useGrouping:true
    })

    const datarandom = props.data.slice(0,4)

    return(
        <div>
            <h2 className='font-bold text-xl mb-4'>Lainnya</h2>
            <div className='flex-row flex gap-6'>
                {
                    props.data ?
                    datarandom.map((item,index) =>       
                        <CardComponent
                         src={`${process.env.REACT_APP_URL_API}img/${item.gambar}`}
                         nama={item.nama}
                         rating={item.rating}
                         terjual={item.terjual}
                         harga={formatter.format(item.harga_asli)}
                         key={index}
                         slug={item.slug}
                         deskripsi={item.deskripsi}
                        />   
                    )
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default LainnyaDetailComponent
