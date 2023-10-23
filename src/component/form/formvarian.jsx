import { Box, FormLabel, Input, useDisclosure } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ButtonPrimary from '../button/buttonprimary';
import CardListComponent from '../card/cardlist';
import ModalComponent from '../modal/modal';
import FormTambahVarianComponent from './formtambahvarian';
import useItemStore from '../../state/item';
import axios from 'axios';
import useFormStore from '../../state/form';
import useVarianStore from '../../state/varian';

const FormVarianBarangComponent = () => {
  const {isOpen:varianisopen,onOpen:varianonopen,onClose:varianonclose} = useDisclosure();
  const {isOpen:varianeditisopen,onOpen:varianeditonopen,onClose:varianeditonclose} = useDisclosure();
  const [datavarian,setdatavarian] = useItemStore((state) => [state.varian,state.setvarian])
  const [searchtext,setsearchtext] = useState("")
  const [updater,setupdater] = useState(false)
  const [isload,setisload] = useState(false)
  const [forminput,setforminput,resetform] = useFormStore((state) => [state.form,state.setform,state.resetform])
  const [editedid,seteditedid] = useState(null)
  const [typeform,settypeform] = useState(null)
  const [varian,setvarian,deletevarian,updatevarian] = useVarianStore((state) => [state.varian,state.setvarian,state.deletevarian,state.updatevarian])

  const handlesearchtext = (e) => {
    setsearchtext(e.target.value)
  }

  const handlecrud = async(url,method,data) => {
    try{
      let res;
      switch(method){
        case "post":
          res = await axios.post(`${process.env.REACT_APP_URL_API}${url}`,data)
          break;
        case "delete":
          res = await axios.delete(`${process.env.REACT_APP_URL_API}${url}`)
          break;
        case "put":
          res = await axios.put(`${process.env.REACT_APP_URL_API}${url}`,data)
          break;
      }
      resetform()
      setupdater(true)
      setisload(true)
      setTimeout(() => {
        setupdater(false)
        setisload(false)
      },500)
    }
    catch(e){
      console.log(e)
      throw new Error(e)
    }
  }

  const handleclick = (e) => {
    const typebtn = e.target.getAttribute("typebtn")
    const id = e.target.getAttribute("id")
    settypeform(typebtn)

    if(typebtn === "delete"){
      //handlecrud(`varian/${id}`,"delete")
      deletevarian(id)
    }

    if(typebtn === "edit"){
      varianeditonopen()
      seteditedid(id)
    }
  }

  const handletambahform = () => {
    varianonopen()  
    settypeform("tambah")
  }

  useEffect(() => {
    const fetchdata = async() => {
      try{
        if(Object.keys(datavarian).length === 0){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}varian`)
          setdatavarian(res.data.data)
        }
      }
      catch(e){
        throw new Error(e)
      }
    }
    fetchdata()
  },[])

  useEffect(() => {
    const fetchdata = async() => {
      try{  
        let res = await axios.get(`${process.env.REACT_APP_URL_API}varian`)
        setdatavarian(res.data.data)
      }
      catch(e){
        
        throw new Error(e)
      }
    }
    if(isload){
      fetchdata()
    }
  },[updater])

  useEffect(() => {
    const fetchdata = async() => {
      try{  
        if(editedid){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}varian/${editedid}`)
          const data = res.data.data
          console.log(data)
          for(const key in data){
            setforminput(key,data[key])
          }
        }
      }
      catch(e){
        throw new Error(e)
      }
    }
    
    //fetchdata()
    const refetch = () => {
      const finditem = varian.find(item => item.id == editedid)
      if(finditem){
        setforminput("nama",finditem.nama)
      }
      //console.log(finditem)
    }
    refetch()

  },[editedid])

  useEffect(() => {
    setforminput("varian",varian)
  },[varian])

  useEffect(() => {
    console.log(varian)
    console.log(typeform)
  })

  const handlesubmit = (e) => {
    e.preventDefault()

    if(typeform === "tambah"){
      setvarian({nama:forminput.nama,id:Math.floor(Math.random() * 999)})
      //handlecrud("varian","post",forminput)
    }
    else if(typeform === "edit"){
      //handlecrud(`varian/${editedid}`,"put",forminput)
      updatevarian({nama:forminput.nama},editedid)
    }

    

  
  }

  return(
    <Box>
        <div className='mb-3'>
          <Input type="text" placeholder='Cari Varian' onChange={handlesearchtext} />
        </div>
        <div className='mb-3'>
         <ButtonPrimary onclick={handletambahform}>Tambah Varian</ButtonPrimary>
         <ModalComponent 
           onclose={varianonclose}
           isopen={varianisopen}
           onopen={varianonopen}
           title="Tambah Varian"
           body={<FormTambahVarianComponent typeform="tambah" />}
           handlesubmit={handlesubmit}
         />
        </div>
        <div>
          {/* { 
            datavarian.map((item,index) => {
              if(item.nama.toLowerCase().includes(searchtext.toLowerCase())){
                return(
                  <CardListComponent 
                    key={index}
                    nama={item.nama}
                    onclick={handleclick}
                    id={item.varian_id}
                  />
                )
              }
            })
          } */}
          {
            varian.map((item,index) => {
              if(item.nama.toLowerCase().includes(searchtext.toLowerCase())){
                return(
                  <CardListComponent 
                    key={index}
                    nama={item.nama}
                    onclick={handleclick}
                    id={item.id}
                  />
                )
              }
            })
          }
        </div>
        <ModalComponent 
           onclose={varianeditonclose}
           isopen={varianeditisopen}
           onopen={varianeditonopen}
           title="Edit Varian"
           body={<FormTambahVarianComponent typeform="edit" />}
           handlesubmit={handlesubmit}
         />
    </Box>
  )
}

export default FormVarianBarangComponent