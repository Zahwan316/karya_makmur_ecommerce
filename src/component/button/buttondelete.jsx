import { Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const ButtonDelete = (props) => {
  return(
   <Button onClick={props.onclick} style={{backgroundColor:"#79AC78",color:"white"}}>{props.children}</Button>
  )
}   

export default ButtonDelete;