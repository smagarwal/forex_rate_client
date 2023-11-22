import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';

export default function VariantButtonGroup({selectCurr}) {

    function handleClick(value){
        selectCurr(value);
    }

    const matches = useMediaQuery("(min-width:600px)");

  return (
  
      <ButtonGroup size="large" color= "info" variant="text" orientation={`${matches ? `horizontal` : `vertical`}`} >
        <Button onClick={ ()=> handleClick('EUR/JPY')}>EUR/JPY</Button>
        <Button onClick={()=> handleClick('EUR/USD')}>EUR/USD</Button>
        <Button onClick={()=> handleClick('USD/CNY')}>USD/CNY</Button>
        <Button onClick={()=> handleClick('USD/INR')}>USD/INR</Button>
      </ButtonGroup>

  );
}