import { Box, Button, Checkbox, Flex, FormLabel, Image, Input, InputGroup, InputLeftAddon, Select, Textarea, useDisclosure } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ButtonPrimary from './../button/buttonprimary';
import ModalComponent from './../modal/modal';
import FormVarianBarangComponent from './formvarian';
import CardListSelectComponent from '../card/cardlistselect';
import FormKategoriBarangComponent from './formkategoribarang';
import useFormStore from '../../state/form';
import axios from 'axios';

const FormTambahBarangComponent = (props) => {
  const[isdiskon,setisdiskon] = useState(false)
  const{onClose:kategorionclose,onOpen:kategorionopen,isOpen:kategoriisopen} = useDisclosure()
  const{onClose:varianonclose,onOpen:varianonopen,isOpen:varianisopen} = useDisclosure()
  const[selectedfiles,setselectedfiles] = useState([])
  const[selectedfile,setselectedfile] = useState(null)
  const[forminput,setforminput] = useFormStore((state) => [state.form,state.setform])

  useEffect(() => {
    
  })

  const handleforminput = (e) => {
    const {name,value} = e.target
    setforminput(name,value)
  }

  const handleDiskon = (e) => {
    setisdiskon(!isdiskon)
  }

  const handleUploadFile = (e) => {
    const files = e.target.files[0]
    if(files){
      setselectedfile(URL.createObjectURL(files))
      setforminput("gambar",files)
    }
  }

  const handleSlug = () => {
    let value = forminput.nama
    const modified = value.replace(/\s+/g,'-')
    setforminput("slug",modified)
  }

  const handleUploadedFiles = (e) => {
    const files = e.target.files
    if(files){
      setselectedfiles([...selectedfiles,...Array.from(files)])
      setforminput("gambars",Array.from(files))
    }
  }

  return(
    <Box>
      <div className='mb-4'>
        <FormLabel>Nama Barang</FormLabel>
        <Input type="text" name="nama" onChange={handleforminput} onBlur={handleSlug} value={forminput.nama} />
      </div>
      <div className='mb-4'>
        <FormLabel>Gambar Barang Yang Akan Dijadikan Thumbnail</FormLabel>
        <Flex gap={3} marginBottom={4} wrap={'wrap'}>  
          <Box>
            <Image src={selectedfile} className='w-32 h-32 rounded-md'  />
          </Box>
        </Flex>
        <Input type="file" id='file-upload' onChange={handleUploadFile} display="none" accept='image/png,image/jpeg,image/jpg' />
        <FormLabel htmlFor='file-upload'>
          <Button as="span" colorScheme='green'>Upload File</Button>
        </FormLabel>
      </div>
      {/* <div className='mb-4'>
        <FormLabel>Gambar Barang</FormLabel>
        <Flex gap={3} marginBottom={4} wrap={'wrap'}>
          {
            selectedfiles.map((item,index) =>
              <Box>
                <Image key={index} src={URL.createObjectURL(item)} className='w-32 h-32 rounded-md' />
              </Box>
            )
          }
        </Flex>
        <Input type="file" id='file-uploads' onChange={handleUploadedFiles} display="none" multiple />
        <FormLabel htmlFor='file-uploads'>
          <Button as="span" colorScheme='green'>Upload File</Button>
        </FormLabel>
      </div> */}
      <div className='mb-4'>
        <FormLabel>Deskripsi Barang</FormLabel>
        <Textarea resize="none" height={40} name="deskripsi" onChange={handleforminput} value={forminput.deskripsi} />
      </div>
      <div className='mb-4'>
        <FormLabel>Spesifikasi Barang</FormLabel>
        <Textarea resize="none" height={40} name="spesifikasi" value={forminput.spesifikasi} onChange={handleforminput} />
      </div>
      <div className='mb-4'>
        <FormLabel>Harga Barang</FormLabel>
        <InputGroup>
          <InputLeftAddon>Rp</InputLeftAddon>
          <Input type="number" name="harga_asli" value={forminput.harga_asli} onChange={handleforminput} />
        </InputGroup>
      </div>
      <div className='mb-4'>
        <FormLabel>Stok Barang</FormLabel>
        <Input type="number" name="stok" value={forminput.stok} onChange={handleforminput} />
      </div>
      {/* <div className='mb-4'>
        <FormLabel>Varian Barang (Jika ada)</FormLabel>
        <ButtonPrimary onclick={varianonopen}>Kelola</ButtonPrimary>
        <ModalComponent 
          onclose={varianonclose}
          onopen={varianonopen}
          isopen={varianisopen}
          body={<FormVarianBarangComponent />}
          title="Variant Barang"
          size="xl"
        />
      </div> */}
      <div className='mb-4'>
        <FormLabel>Kategori Barang</FormLabel>
        <ButtonPrimary onclick={kategorionopen}>Pilih</ButtonPrimary>
        <ModalComponent 
          onclose={kategorionclose}
          isopen={kategoriisopen}
          onopen={kategorionopen}
          title="Kategori Barang"
          size="xl"
          body={<FormKategoriBarangComponent datasubmit={props.datasubmit}  />}
        />
      </div>
      <div className='mb-4'>
        <Checkbox onChange={handleDiskon} >Apakah Diskon ?</Checkbox>
      </div>
      {
        isdiskon &&
        <div className='mb-4'>
          <FormLabel>Diskon Barang</FormLabel>
          <InputGroup>
            <InputLeftAddon>%</InputLeftAddon>
            <Input type="number" name="diskon" value={forminput.diskon} onChange={handleforminput} max={2} />
          </InputGroup>
        </div>


      }

      
    </Box>
  )
}

export default FormTambahBarangComponent