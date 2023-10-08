import React, { useState, useEffect } from 'react';
import CardPembayaranComponent from '../../card/card_pembayaran';
import { Box } from '@chakra-ui/react';
import PembayaranUnitComponent from '../pembayaran_unit/pembayaran_unit';
import MetodePembayaranComponent from '../metode_pembayaran/metodepembayaran';

const DetailPembayaranComponent = () => {
    return(
        <Box classname="flex flex-col ">
            <CardPembayaranComponent />
            <PembayaranUnitComponent />
            <MetodePembayaranComponent />
        </Box>
    )
}

export default DetailPembayaranComponent