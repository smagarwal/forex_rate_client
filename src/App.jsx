import { useEffect, useState } from 'react'
import './App.css'
import ResponsiveDatePickers from './components/Resp_datepicker'
import CustomizedTables from './components/Table_comp'
import SimpleAreaChart from './components/Charts_mui'
import VariantButtonGroup from './components/Button_group'
import fData from './lib/FormattedData';
import dayjs from 'dayjs';

function App() {

  const [curr, setCurr] = useState('EUR/JPY'); 
  const minDate = dayjs('2023-11-04');
  const maxDate = dayjs('2023-11-11'); 
  const defaultDate = dayjs('2023-11-08');
  const [dateVal, setDateVal] = useState(defaultDate.format('YYYY-MM-DD')); 
  const [displayData, setDisplayData] = useState([]);

  function selectCurr(value){
    //based on the date value 
    setCurr(value);
  }

  function selectDate(date){
    setDateVal(date.format('YYYY-MM-DD'));
  } 

  //set the display array as per the selected currency value

  useEffect(()=>{

    async function callApi(){
      try{
  
        const resp = await fData.getDisplayData(dateVal, curr);
  
        setDisplayData(resp);
  
      }catch (err){

        console.log(err);
      }
    } 

    if(dateVal !== '' && curr !== ''){

      callApi(); 

    }
  
  },[curr, dateVal]) 



  return (
    <div className=" flex flex-col items-center min-h-screen bg-cover bg-center " style={{ backgroundImage: "url('/bg.svg')" }}>

      <div className='pt-10 mx-auto'>
        <ResponsiveDatePickers minDate= {minDate} maxDate={maxDate} selectDate={selectDate} defaultDate={defaultDate}/> 

      </div>

      <div className='py-5 mx-auto'>

        <VariantButtonGroup selectCurr={selectCurr}/>

      </div>


      {displayData.length > 0 && (
        <>
          <div> 
            <SimpleAreaChart rows={displayData} displayCurr={curr}/>
          </div>

          <div> 
           <CustomizedTables rows={displayData} displayCurr={curr}/>
          </div>
         
        </>

      )}

    </div>

  );
}

export default App
