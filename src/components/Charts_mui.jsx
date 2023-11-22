import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


export default function SimpleAreaChart({rows, displayCurr}) {

  const floor = rows[0].floor_rate; 

  const chartTitle = displayCurr.split('/');

  const uData = rows.map((row)=>{

    return row.rate;
  
  });

  const xLabels = rows.map((row)=>{

    return row.hrs;
  
  });


  return (

    <LineChart
      height= {500}
      series={[{ data: uData, label: `1 ${chartTitle[0]} equals ${chartTitle[1]}`, area: true, showMark: true }]}
      xAxis={[{ label: 'Hrs', scaleType: 'point', data: xLabels }]}
      yAxis={[
        {
        
          min: floor,
          tickMinStep : 0.0001
        },
      ]}
      sx={{
        '.MuiLineElement-root': {
          display: 'none',
        },
      }}
    />
  );
}