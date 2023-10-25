import { Avatar } from '@chakra-ui/avatar';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import React, { useState, useEffect } from 'react';
import AvatarProfileComponent from './component/avatar';
import {cilCart} from "@coreui/icons"
import  CIcon  from '@coreui/icons-react';
import { useNavigate } from 'react-router-dom';
import {ReactSearchAutocomplete } from "react-search-autocomplete"
import useItemStore from '../../state/item';
import axios from 'axios';


const NavComponent = (props) => {
    const navigate = useNavigate()
    const [databarang,setdatabarang] = useItemStore((state) => [state.barang,state.setbarang])

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
          fetchdata()
    },[])

    const backToHome = () => {
        navigate("/")
    }

    const navigateToCart = () => {
        navigate("/keranjang")
    }

    const formatresult = (item) => {
        return(
            <>
                <span >{item.name}</span>
            </>
        )
    }
    const handleOnSearch = (string, result) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        window.location.href = `/search/${string}`
    }
    
      const handleOnHover = (result) => {
        // the item hovered
        //console.log(result)
      }
    
      const handleOnSelect = (item) => {
       window.location.href = `/search/${item.name}`
      }  

      const handleonenter = (item) => {
        //window.location.href = `/search/${item.name}`
        console.log("test")
      }

      const items = databarang.map(item => 
        ({
            name:item.nama,id:item.barang_id  
        })
    )

    useEffect(() => {
        console.log(items)
    })


    return(
        <nav className='flex flex-row h-20 p-6 items-center mb-8 fixed w-full z-50 bg-white' >
            <div className='mr-4 w-13' >
                <h2 style={{color:"#79AC78",fontWeight:"bold"}} className='cursor-pointer' onClick={backToHome}>Karya Makmur</h2>
            </div>
            <div className='w-5/6'>
                <FormControl>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        formatResult={formatresult}
                        onKeyUp={handleonenter}
                    />
                </FormControl>
            </div>
            <div className='w-8 mx-2'>
                <CIcon icon={cilCart} size='sm' className='cursor-pointer' onClick={navigateToCart} />
            </div>
            <div className='ml-3'>
                <AvatarProfileComponent />
            </div>
        </nav>
    )
}

export default NavComponent