import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup({selectCurr}) {

    function handleClick(value){
        selectCurr(value);
    }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="large" color= "info" variant="text" aria-label="text button group">
        <Button onClick={ ()=> handleClick('EUR/JPY')}>EUR/JPY</Button>
        <Button onClick={()=> handleClick('EUR/USD')}>EUR/USD</Button>
        <Button onClick={()=> handleClick('USD/CNY')}>USD/CNY</Button>
        <Button onClick={()=> handleClick('USD/INR')}>USD/INR</Button>
      </ButtonGroup>
    </Box>
  );
}