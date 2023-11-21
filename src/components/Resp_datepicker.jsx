import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function ResponsiveDatePickers({minDate, maxDate, selectDate, defaultDate}) {

  const [value, setValue] = React.useState(defaultDate);


  function handleDateSelect(newVal){

    setValue(newVal);
    selectDate(newVal);

  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <DatePicker  label="Select Date"
      value={value}
      onChange={(newValue) => handleDateSelect(newValue)}
      minDate={minDate}
      maxDate={maxDate}
      />
    
    </LocalizationProvider>
  );
}