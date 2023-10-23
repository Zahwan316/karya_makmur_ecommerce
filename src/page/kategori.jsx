import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import KategoriCard from '../component/card/kategori_card';
import ButtonPrimary from '../component/button/buttonprimary';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import ModalComponent from '../component/modal/modal';
import FormKategoriComponent from '../component/form/formkategori';
import useItemStore from '../state/item';
import axios from "axios"
import useFormStore from '../state/form';
import Swal from "sweetalert2"
import FormKategoriEditHapus from '../component/form/formkategoriedithapus';

const KategoriPage = (props) => {
  const {isOpen,onOpen,onClose} = useDisclosure()
  const {isOpen:isopenkategori,onOpen:onopenkategori,onClose:onclosekategori} = useDisclosure()
 
  const [datakategori,setdatakategori] = useItemStore((state) => [state.kategori,state.setkategori])
  const [forminput,setforminput] = useFormStore((state) => [state.form,state.setform])
  const [typeform,settypeform] = useState()
  const [editedid,seteditedid] = useState()
  const [updater,setupdater] = useState(false)
  const [isload,setisload] = useState(false)

  useEffect(() => {
    const fetchdata = async() => {
      try{
        if(Object.keys(datakategori).length === 0){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}kategori`)
          setdatakategori(res.data.data)
        }
      }
      catch(e){
        //console.log(e)
        throw new Error(e.message)
      }
    }
    fetchdata()
  },[])

  useEffect(() => {
    console.log(typeform)
  })

  useEffect(() => {
    const fetchdata = async() => {
      try{     
        if(isload){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}kategori`)
          setdatakategori(res.data.data)
        } 
      }
      catch(e){
        //console.log(e)
        throw new Error(e.message)
      }
    }
    fetchdata()
  },[updater])

  const getTypeBtn = (typebtn,id) => {
    settypeform(typebtn)
    seteditedid(id)
  }

  const getAddBtn = (e) => {
    onOpen()
    const typebtn = e.target.getAttribute("typebtn")
    settypeform(typebtn)
  }

  const PostPutSubmit = async(url,method,data) => {
    try{
      let res
      switch(method){
        case "post":
          res = await axios.post(`${process.env.REACT_APP_URL_API}${url}`,data,{
            headers:{
              "Content-Type":"multipart/form-data"
            }
          })
          console.log(res)
          break;
        case "put":
          res = await axios.put(`${process.env.REACT_APP_URL_API}${url}`,data,{
            headers:{
              "Content-Type":"multipart/form-data"
            }
          })
          break;
      }
    }
    catch(e){
      console.log(e)
    }
    setupdater(true)
    setisload(true)
    setTimeout(() => {
      setupdater(false)
      setisload(false)
    })
    Swal.fire({
      title:`Data Berhasil ${method === 'post' ? "Data berhasil ditambah" : "Data Berhasil Diupdate"}`,
      icon:"success"
    })
    onClose()
    onclosekategori()
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("gambar",forminput.gambar)
    formdata.append("nama",forminput.nama)
    
    
    
    if(typeform === "tambah"){
      PostPutSubmit("kategori","post",formdata)
    }
  }
  

  return(
      <DefaultLayout>
          <Box className='mb-6'>
            <h2 className='font-bold text-lg mb-4'>Kategori</h2>
            {
              props.role === "pegawai" &&
              <Box className='flex gap-4'>
               <ButtonPrimary onclick={getAddBtn} typebtn="tambah">+ Tambah Kategori</ButtonPrimary>
               <Button colorScheme='blue' onClick={onopenkategori}>Edit / Hapus Kategori</Button>
              </Box>
            }
          </Box>
          <div className='flex flex-wrap gap-6'>
             {
              datakategori != null || datakategori != [] ?
              datakategori.map((item,index) =>
                <KategoriCard
                  img={`${process.env.REACT_APP_URL_API}img/${item.img}`}
                  nama={item.nama}
                  key={index}
                />
              )
              :
              <h2>Data Masih Kosong</h2>
             }
          </div>
          <ModalComponent 
            onopen={onOpen}
            onclose={onClose}
            isopen={isOpen}
            title="Tambah Kategori"
            body={<FormKategoriComponent typeform="tambah" />}
            size="xl"
            handlesubmit={handlesubmit}
          />
          <ModalComponent 
            onopen={onopenkategori}
            onclose={onclosekategori}
            isopen={isopenkategori}
            title="Edit / Hapus Kategori"
            size="xl"
            body={<FormKategoriEditHapus postputsubmit={PostPutSubmit} />}
            
          />
          
      </DefaultLayout>
  )
}

export default KategoriPage