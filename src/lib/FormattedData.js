import axios from "axios";

class FormattedData{

    constructor(){
        this.formatObj = {date: null}; 
    }

    async getInputArray(inputDate){

        let url = import.meta.env.VITE_BASE_URL;
        let enpoint = import.meta.env.VITE_ENDPOINT;
        let payload = {
            "my_date": inputDate   //format string yyyy-mm-dd
        };

        try{
            const response = await axios.post(`${url}/${enpoint}`, payload);
            console.log("Api call");
            return response.data; 

        }catch(err){
            console.log(err);
            return err; 
        }
    }

    createFormattedObj(inputArray, inputDate){
        this.formatObj.date = inputDate;
        this.formatObj["EUR/JPY"] = []; 
        this.formatObj["EUR/USD"] = []; 
        this.formatObj["USD/CNY"] = []; 
        this.formatObj["USD/INR"] = [];  

        //to erradicate duplicate values 
        const checkSet = new Set;
        inputArray.forEach((value)=>{
            let obj= {id: null, hrs: null, rate: null, floor_rate: null}; 
            obj.hrs = value.my_time.substring(0,2); // need data checking -> duplicate, missing , etc.
            //obj.id = value.my_s_key;
            obj.id = obj.hrs;
            if(checkSet.has(value.currency_pair + '_'+ obj.hrs)){
                return;
            }
            checkSet.add(value.currency_pair + '_'+ obj.hrs);
            obj.rate = Math.round(parseFloat(value.exchange_rate) * 10000)/10000; 
            obj.floor_rate = Math.floor(obj.rate);
            this.formatObj[value.currency_pair].push(obj); 
        })

    }

    async getDisplayData (inputDate, inputCurr){

        try{
            //check if data already exists
            if(this.formatObj.date && this.formatObj.date === inputDate){
                console.log("using cached data")
                return this.formatObj[inputCurr]; 
            }
            //make api call 
            const inputArray = await this.getInputArray(inputDate);
            //format to create object
            this.createFormattedObj(inputArray, inputDate);
            return this.formatObj[inputCurr]; 
        }catch(err){
            return err; 
        }
    }
}

const fData = new FormattedData(); 
export default fData;