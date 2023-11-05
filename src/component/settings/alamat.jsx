import { Box, Button, useDisclosure, useTimeout } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardAlamatComponent from './component/cardalamat';
import ModalComponent from '../modal/modal';
import FormTambahAlamatComponent from '../form/formtambahalamat';
import useAkunStore from '../../state/akun';
import axios from 'axios';
import useFormStore from './../../state/form';
import {v4 as uuidv4} from "uuid"
import Swal from 'sweetalert2';

const AlamatSettingsComponent = () => {
  const {onClose,isOpen,onOpen} = useDisclosure()
  const [typeform,settypeform] = useState()
  const [editedid,seteditedid] = useState("")
  const [useralamat,setuseralamat,userdata,setuserdata] = useAkunStore((state) => [state.useralamat,state.setuseralamat,state.userdata,state.setuserdata])
  const [forminput,setforminput,resetform] = useFormStore((state) => [state.form,state.setform,state.resetform])
  const [updater,setupdate] = useState()
  const [isload,setisload] = useState(false)

  const getTypeBtn = (typebtn,id) => {
    settypeform(typebtn)
    seteditedid(editedid)
  }

  const changealamat = (id) => {
    // setforminput("keaktifan",1);
    // setforminput("user_id",userdata.user_id);
    const sendata = async() => {
      try{
        let res = await axios.put(`${process.env.REACT_APP_URL_API}user_alamat/edit/alamat/${id}`,{keaktifan:1,user_id:userdata.user_id})
        console.log(res)
      }
      catch(e){
        console.log(e)
      }
    }
    sendata()
    resetform()
    setupdate(uuidv4())
    setisload(true)
    setTimeout(() => {
      setisload(false)
    },500)
  }

  const submitLink = async(method,data) => {
    try{
      let res;
      switch(method){
        case "post" :
          res = await axios.post(`${process.env.REACT_APP_URL_API}user_alamat`,data)
          break;
        case "put" :
          res = await axios.put(`${process.env.REACT_APP_URL_API}user_alamat/${editedid}`,data)
          console.log(res)
          break;
      }
      Swal.fire({
        title: `Alamat Berhasil ${method === "post" ? "Ditambahkan" : "Diedit"}`,
        icon: "success",
      })
      resetform()
      setupdate(uuidv4())
      setisload(true)
      setTimeout(() => {
        setisload(false)
      },500)
    }
    catch(e){
      throw new Error(e)
      console.log(e)
    }
  }

  const getIdBtn = (id) => {
    seteditedid(id)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(forminput.type_form === "tambah"){
      submitLink("post",forminput)
    }
    else if(forminput.type_form === "edit"){
      submitLink("put",forminput)

    }
    onClose()
  }

  useEffect(() => {
    const getData = async() => {
      try{
        let res = await axios.get(`${process.env.REACT_APP_URL_API}user_alamat/user/${userdata.user_id}`)
        setuseralamat(res.data.data)
      }
      catch(e){
        console.log(e)
      }
    }
    getData()
  },[])

  useEffect(() => {
    const getData = async() => {
      try{
        if(isload){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}user_alamat/user/${userdata.user_id}`)
          setuseralamat(res.data.data)
        }
      }
      catch(e){
        console.log(e)
      }
    }
    getData()
  },[updater])

  useEffect(() => {
    const getData = async() => {
      try{
        let res = await axios.get(`${process.env.REACT_APP_URL_API}user_alamat/${editedid}`)
        const data = res.data.data
        for(const key in data){
          setforminput(key, data[key])
        }
      }
      catch(e){
        console.log(e)
        throw new Error(e)
      }
    }
    if(editedid){
      getData()
    }
  },[editedid])

  useEffect(() => {
    console.log(forminput)
    console.log(editedid)
  })

  return(
    <Box className='w-3/4 '>
      <Box className='flex justify-between mb-6 items-center'>
        <h2 className='font-bold text-xl '>Alamat</h2>
        <Button style={{backgroundColor:"#79AC78",color:"white"}} onClick={onOpen}>+ Tambah Alamat Baru</Button>
      </Box>
      <Box>
      
        {
          useralamat.length === 0 ?
          <h2>Alamat belum ada</h2>
          :
          useralamat.map((item,index) => 
            <CardAlamatComponent 
              keaktifan={item.keaktifan}
              getTypeBtn={getTypeBtn}
              alamat={item.alamat}
              label={item.label}
              changealamat={changealamat}
              id={item.user_alamat_id}
              key={index}
              getIdBtn={getIdBtn}
              handlesubmit={handleSubmit}
            />
          )
        }
      
      </Box>
      <ModalComponent 
        isopen={isOpen}
        onclose={onClose}
        onopen={onOpen}
        title={typeform === "edit" ? "Edit Data" : "Tambah Data"}
        body={<FormTambahAlamatComponent type="tambah" />}
        size="xl"
        handlesubmit={handleSubmit}
      />
    </Box>
  )
}

export default AlamatSettingsComponent