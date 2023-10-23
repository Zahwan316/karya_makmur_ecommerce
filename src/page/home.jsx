import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import { Card, CardBody } from '@chakra-ui/card';
import {CCarousel, CCarouselItem, CImage} from "@coreui/react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Box, Button } from '@chakra-ui/react';
import CIcon from '@coreui/icons-react';
import { cilArrowCircleRight } from '@coreui/icons';
import KategoryComponent from '../component/home/kategori/kategori';
import ProdukTerlarisComponent from '../component/home/produk_terlaris/produk_terlaris';
import RekomendasiComponent from '../component/home/rekomendasi/rekomendasi';
import { useNavigate } from 'react-router-dom';
import useItemStore from '../state/item';
import axios from 'axios';

const HomePage = (props) => {
    const navigate = useNavigate()
    const [databarang,setdatabarang] = useItemStore((state) => [state.barang,state.setbarang])
    const [datakategori,setdatakategori] = useItemStore((state) => [state.kategori,state.setkategori])
    const [isload,setisload] = useState(false)

    const redirectToListBarang = () => {
        navigate("../pegawai/listbarang")
    }

    const formatharga = (harga) => {
        const formatter = Intl.NumberFormat("id-ID",{
            style: "decimal",
            useGrouping:true
        })
        const format = formatter.format(harga)
        return format
    }

    useEffect(() => {
        const fetchdata = async() => {
            try{
              if(Object.keys(databarang).length === 0){
                let res = await axios.get(`${process.env.REACT_APP_URL_API}barang`)
                setdatabarang(res.data.data)
              }
              if(Object.keys(datakategori).length === 0){
                let res = await axios.get(`${process.env.REACT_APP_URL_API}kategori`)
                setdatakategori(res.data.data)
              }
            }
            catch(e){
              throw new Error(e)
            }
            finally{
                setisload(true)
            }
        }
        setTimeout(() => {
            fetchdata()
        },500)
    },[])

    return(
        <DefaultLayout>
            <div>
                {props.role === "pegawai" &&
                    <Button className='bg-green-600 mb-4' style={{backgroundColor:"#79AC78",color:"white"}} onClick={redirectToListBarang}>List Semua Barang </Button>
                }
            </div>
            <div className=' drop-shadow-lg relative mb-5 border border-gray-400' >
                <Carousel showArrows={true} dynamicHeight={true} autoPlay={true} showThumbs={false} infiniteLoop={true}>
                    <div>
                        <img src="./img/banner.jpg" alt="Slide 1" style={{height:"30em"}} />
                    </div>
                    <div>
                        <img src="./img/banner1.jpg" alt="Slide 2" style={{height:"30em"}} />
                    </div>
                </Carousel>
            </div>
            <KategoryComponent 
              datakategori={datakategori}
              isload={isload}
            />
            <ProdukTerlarisComponent 
              databarang={databarang}
              formatharga={formatharga}
              isload={isload}
            />
            <RekomendasiComponent
              databarang={databarang}
              formatharga={formatharga}
              isload={isload}
            />
        </DefaultLayout>
    )
}

export default HomePage