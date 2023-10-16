import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const ModalComponent = (props) => {
  return(
    <Modal isOpen={props.isopen} onClose={props.onclose} size={props.size}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={props.handlesubmit} >
         <ModalHeader>{props.title}</ModalHeader>
         <ModalCloseButton />
         <ModalBody>
             {props.body}
         </ModalBody>
         <ModalFooter>
           <Button  mr={3} onClick={props.onclose}>
             Close
           </Button>
           <Button colorScheme='green' type='submit' >Simpan</Button>
         </ModalFooter>
        </form>
      </ModalContent>
        
    </Modal>
  )
}

export default ModalComponent