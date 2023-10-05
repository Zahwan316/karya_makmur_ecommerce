import { Button, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react';
import React, { useState, useEffect } from 'react';
import {ReactSearchAutocomplete } from "react-search-autocomplete"

const FilterBoxComponent = () => {
    return(
        <div className='w-64 border border-slate-200 rounded-md p-6'> 
            <h2 className='font-bold mb-4'>Filter</h2>
            <div>
                <InputGroup className='mb-4'>
                    <InputLeftAddon>
                        Rp
                    </InputLeftAddon>
                    <Input type="text" placeholder='Harga Minimum'/>
                </InputGroup>
                <InputGroup className='mb-6'>
                    <InputLeftAddon>
                        Rp
                    </InputLeftAddon>
                    <Input type="text" placeholder='Harga Maksimal' />
                </InputGroup>
                <ReactSearchAutocomplete>

                </ReactSearchAutocomplete>
                <Button variant="outline" style={{borderColor:"#B0D9B1"}}>Cari</Button>
            </div>
        </div>
    )
}

export default FilterBoxComponent;