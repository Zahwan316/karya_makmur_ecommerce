import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import ImagePreviewComponent from '../component/detail/img';
import DeskripsiComponent from '../component/detail/deskripsi';
import { Box } from '@chakra-ui/react';
import CardFloating from '../component/card/card_floating';
import SpesifikasiProdukComponent from '../component/detail/spesifikasi_produk';
import RatingCommentComponent from '../component/detail/rating_comment';
import LainnyaDetailComponent from '../component/detail/lainnya';
import useItemStore from '../state/item';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
    const [databarang,setdatabarang] = useItemStore((state) => [state.barang,state.setbarang])
    const {slug} = useParams()

    const barangmain = databarang.length != 0 && databarang.find(item => 
      item.slug === slug
    )

    useEffect(() => {
     const fetchdata = async() => {
      try{
        if(Object.keys(databarang).length === 0){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}barang`)
          setdatabarang(res.data.data)
        }
    
      }
      catch(e){
        throw new Error(e)
      }
     }
     fetchdata()
    },[])

    return(
        <DefaultLayout >
           <Box className='flex flex-col mb-10 sm:flex-col sm:gap-4 lg:flex-row xl:flex-row md:flex-row'> 
            <ImagePreviewComponent 
              img={barangmain.gambar}
              
            />
            <DeskripsiComponent
              namaproduk={barangmain.nama}
              harga={barangmain.harga_asli}
              terjual={barangmain.terjual}
              rating={barangmain.rating}
              deskripsi={barangmain.deskripsi}
            />
            <CardFloating 
              page="detail"
              stok={barangmain.stok}
              harga={barangmain.harga_asli}
              />
           </Box>
           <Box className='mb-10'>
             <SpesifikasiProdukComponent />
           </Box>
           <Box className='mb-10'>
             <RatingCommentComponent />
           </Box>
           <Box>
            <LainnyaDetailComponent 
              data={databarang}
            />
           </Box>
        </DefaultLayout>
    )
}

export default DetailPage