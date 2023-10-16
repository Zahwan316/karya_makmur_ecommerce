import { Box, Input, useDisclosure } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardListComponent from '../card/cardlist';
import useItemStore from '../../state/item';
import Swal from 'sweetalert2';
import axios from 'axios';
import ModalComponent from '../modal/modal';
import FormKategoriComponent from './formkategori';
import useFormStore from '../../state/form';

const FormKategoriEditHapus = (props) => {
  const{isOpen,onOpen,onClose} = useDisclosure()
  const[datakategori,setdatakategori] = useItemStore((state) => [state.kategori,state.setkategori])
  const[forminput,setforminput] = useFormStore((state) => [state.form,state.setform])
  const[searchtext,setsearchtext] = useState("")
  const[updater,setupdater] = useState(false)
  const[isload,setisload] = useState(false)
  const[editedid,seteditedid] = useState(null)

  useEffect(() => {
    const refetchdata = async() => {
      try{
        if(isload){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}kategori`)
          setdatakategori(res.data.data)
        }
      }
      catch(e){

      }
    }
    refetchdata()
  },[updater])

  useEffect(() => {
    const refetchdata = async() => {
      try{
        if(editedid){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}kategori/${editedid}`)
          const data = res.data.data
          for(const key in data){
            setforminput(key, data[key])
          }
        }
      }
      catch(e){
        throw new Error(e)
      }
    }

    refetchdata()
  },[editedid])

  const handleseacthtext = (e) => {
    setsearchtext(e.target.value)
  }

  const handleclickitem = (e) => {
   const id = e.target.getAttribute("id")
   const typebtn = e.target.getAttribute("typebtn")   
   seteditedid(id)
   console.log(typebtn)
   if(typebtn === "delete"){
     const deldata = async() => {
       try{
        let res = await axios.delete(`${process.env.REACT_APP_URL_API}kategori/${id}`)
        setupdater(true)
        setisload(true)
        setTimeout(() => {
          setupdater(false)
          setisload(false)
        })
       }
       catch(e){
        throw new Error(e)
       }
     }
     deldata()
   }
   else if(typebtn === "edit"){
    onOpen()
   }

  }

  const handlesubmit = (e) => {
    e.preventDefault()

    const formdata = new FormData()
    formdata.append("gambar",forminput.gambar)
    formdata.append("nama",forminput.nama)

    props.postputsubmit(`kategori/${editedid}`,"put",formdata)
    onClose()
  }

  return(
    <Box>
      <Box className='mb-4'>
        <Input type="text" placeholder='Cari Kategori' onChange={handleseacthtext} />
      </Box>
      <Box>
        {
            datakategori.map((item,index) => 
            {
                if(item.nama.toLowerCase().includes(searchtext.toLowerCase())){
                    return (
                        <CardListComponent 
                          nama={item.nama}
                          id={item.kategori_id}
                          key={index}
                          onclick={handleclickitem}
                        />
                    )
                }
            }
            )
        }
      </Box>
      <ModalComponent 
        onopen={onOpen}
        onclose={onClose}
        isopen={isOpen}
        title="Edit Data"
        size="xl"
        body={<FormKategoriComponent typeform="edit" />}
        handlesubmit={handlesubmit}
      />
    </Box>
  )
}

export default FormKategoriEditHapus;