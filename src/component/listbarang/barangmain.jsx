import React, { useState, useEffect } from 'react';
import CardComponent from '../card/card';
import { Box, Skeleton, useDisclosure } from '@chakra-ui/react';
import useItemStore from '../../state/item';
import axios from 'axios';
import useFormStore from '../../state/form';
import Swal from 'sweetalert2';
import ModalComponent from '../modal/modal';
import FormTambahBarangComponent from '../form/formtambahbarang';

const BarangMainComponent = (props) => {
  const [databarang,setdatabarang] = useItemStore((state) => [state.barang,state.setbarang])
  const [updater,setupdater] = useState(false)
  const [isload,setisload] = useState(false)
  const {onOpen,isOpen,onClose} = useDisclosure()
  const [editedid,seteditedid] = useState()
  const [forminput,setforminput,resetform,searchtext] = useFormStore((state) => [state.form,state.setform,state.resetform,state.searchtext])

  useEffect(() => {
    const fetchdata = async() => {
      try{
        if(Object.keys(databarang).length === 0){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}barang`)
          setdatabarang(res.data.data)
        }
      }
      catch(e){
        throw new Error(e.message)
      }
    }
    setTimeout(() => {
      fetchdata()
    },800)
  },[])

  useEffect(() => {
    const fetchdata = async() => {
      try{
        if(isload){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}barang`)
          setdatabarang(res.data.data)
        }
      }
      catch(e){
        throw new Error(e.message)
      }
    }
    setTimeout(() => {
      fetchdata()
    },800)
  },[updater])

  useEffect(() => {
    const fetchdata = async() => {
      try{
        if(editedid){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}barang/${editedid}`)
          const data = res.data.data
          for(const key in data){
            setforminput(key,data[key])
          }
        }
      }
      catch(e){
        throw new Error(e.message)
      }
    } 
    fetchdata()
  },[editedid])

  useEffect(() => {
    console.log(searchtext)
  })

  const handlecrud = async(url,method,data) => {
    try{
      let res;
      switch(method){
        case "delete" : 
          res = await axios.delete(`${process.env.REACT_APP_URL_API}${url}`)
          break;
        case "put":
          res = await axios.put(`${process.env.REACT_APP_URL_API}${url}`,data,{
            headers: {'Content-Type': 'multipart/form-data'}
          })
          console.log(res)
          Swal.fire({
            title:`Data Berhasil diupdate`,
            icon:"success"
          })
          break;
      }
      setupdater(true)
      setisload(true)
      setTimeout(() => {
        setupdater(false)
        setisload(false)
      },500)
      resetform()
      onClose()
      
    }
    catch(e){
      console.log(e)
      throw new Error(e)
    }
  }

  const handleclick = (e) => {
    const typebtn = e.target.getAttribute("typebtn")
    const id = e.target.getAttribute("id")

    if(typebtn == "delete"){
      Swal.fire({
        title: 'Apakah anda yakin?',
        text: "Barang tidak bisa dikembalikan!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus Saja!'
      }).then((result) => {
        if (result.isConfirmed) {
          handlecrud(`barang/${id}`,"delete")
          Swal.fire(
            'Deleted!',
            'Barang anda berhasil dihapus',
            'success'
          )
        }
      })
    }
    if(typebtn == "edit"){
      onOpen()
      seteditedid(id)
    }
  }

  const formatnumber = (number) => {
    const formatter = Intl.NumberFormat("id-ID",{
      style:"decimal",
      useGrouping:true
    })

    const format = formatter.format(number)

    return format
  }

  const handlesubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData()
    for(const key in forminput){
      formdata.append(key,forminput[key])
    }

    handlecrud(`barang/${editedid}`,"put",formdata)
  }

  const onclose = () => {
    onClose()
    resetform()
  }

  return(
    <Box className='flex flex-wrap gap-6'>
      {
        Object.keys(databarang).length === 0 ?
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
        databarang.map((item,index) => {
          if(item.nama.toLowerCase().includes(searchtext.toLowerCase())){
            return(
              <CardComponent 
                nama={item.nama}
                src={`${process.env.REACT_APP_URL_API}img/${item.gambar}`}
                harga={`Rp${formatnumber(item.harga_asli)}`}
                terjual={item.terjual}
                key={index}
                rating={item.rating}
                slug={item.slug}
                role={props.role}
                id={item.barang_id}
                onclick={handleclick}
              />   
            )
          }
        }
           
        )
      }
    <ModalComponent 
      onopen={onOpen}
      isopen={isOpen}
      onclose={onclose}
      title="Edit Data"
      size="2xl"
      body={<FormTambahBarangComponent typeform="edit" />}
      handlesubmit={handlesubmit}
    />
       
    </Box>
  )
}

export default BarangMainComponent;