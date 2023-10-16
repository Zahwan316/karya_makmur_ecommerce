import { Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const ButtonPrimary = (props) => {
  return(
   <Button onClick={props.onclick} typebtn={props.typebtn} style={{backgroundColor:"#79AC78",color:"white"}} className='hover:bg-green-600'>{props.children}</Button>
  )
}   

export default ButtonPrimary;