import { Box, Select, Skeleton } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardComponent from '../card/card';
import useItemStore from '../../state/item';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItemSearchPageComponent = () => {
    const [databarang,setdatabarang] = useState([])
    const {nama} = useParams()
    const [isload,setisload] = useState(true)

    useEffect(() => {
      const fetchdata = async() => {
        try{
          let res= await axios.get(`${process.env.REACT_APP_URL_API}barang/search/${nama}`)  
          setdatabarang(res.data.data) 
          //console.log(nama)  
        }
        catch(e){
          throw new Error(e)
        }
        finally{
          setisload(false)
        }
      }
      fetchdata()
    },[])

    return(
        <div className='w-2/3 '>
            <div className='flex items-center mb-8 justify-end'>
                <div className='flex items-center'>
                    <h2 className='mr-2'>Urutkan : </h2>
                    <div>
                        <Select>
                            <option>Relevan</option>
                            <option>Harga Terendah</option>
                            <option>Harga Tertinggi</option>
                            <option>Terbaru</option>
                        </Select>
                    </div>

                </div> 
            </div>
            <div className='flex flex-wrap gap-6'>
                {
                   Object.keys(databarang).length === 0 ?
                    isload ?
                    <>
                        <Skeleton height={"250px"} width={"250px"}>
                        </Skeleton>
                        <Skeleton height={"250px"} width={"250px"}>
                        </Skeleton>
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
                    <>
                      <Box className='flex justify-center w-full items-center'>
                        <h2 className='font-bold text-2xl'>Maaf,Barang Tidak Ditemukan</h2>
                      </Box>
                    </>
                   :
                   databarang.map((item,index) => 
                    <CardComponent
                        nama={item.nama}
                        slug={item.slug}
                        src={`${process.env.REACT_APP_URL_API}img/${item.gambar}`}
                        harga={item.harga_asli}
                        rating={item.rating}
                        terjual={item.terjual}
                        key={index}
                        deskripsi={item.deskripsi}
                    />
                   )
                   
                }
                
            </div>
        </div>
    )
}

export default ItemSearchPageComponent