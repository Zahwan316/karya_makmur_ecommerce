import { Checkbox, FormLabel, Input, Textarea } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import useFormStore from '../../state/form';
import axios from 'axios';
import useAkunStore from '../../state/akun';

const FormTambahAlamatComponent = (props) => {
  const [forminput,setforminput] = useFormStore((state) => [state.form,state.setform])
  const userdata = useAkunStore((state) => state.userdata)
  const [checked,setchecked] = useState(false)

  const handleFormInput = (e) => {
    const {name,value} = e.target
    setforminput(name, value)
  } 

  const handleChecked = (e) => {
    setchecked(!checked)
    const value = checked ? 0 : 1
    setforminput("keaktifan",value)
  }

  useEffect(() => {
    setforminput("type_form",props.type)
    setforminput("user_id",userdata.user_id)
  },[])

  return(
    <>
      <div className='mb-3'>
        <FormLabel>Label</FormLabel>
        <Input type="text" name="label" onChange={handleFormInput} value={forminput.label} />
      </div>
      <div className='mb-3'>
        <FormLabel>Alamat Lengkap</FormLabel>
        <Textarea resize="none" name="alamat" onChange={handleFormInput} value={forminput.alamat} />
      </div>
      {
        props.type == "tambah" &&
        <div className='mb-3'>
          <Checkbox onChange={handleChecked} checked={forminput.keaktifan == 1}>Jadikan Alamat Utama?</Checkbox>
        </div>
      }
    </>
  )
}

export default FormTambahAlamatComponent