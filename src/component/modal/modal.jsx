import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const ModalComponent = (props) => {
  return(
    <Modal isOpen={props.isopen} onClose={props.onclose} size={props.size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form >
            {props.body}
          </form>
        </ModalBody>
        <ModalFooter>
          <Button  mr={3} onClick={props.onclose}>
            Close
          </Button>
          <Button colorScheme='green' >Simpan</Button>
        </ModalFooter>
      </ModalContent>
        
    </Modal>
  )
}

export default ModalComponent