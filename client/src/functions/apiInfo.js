import axios from "axios"


const apiRailway = "https://portfolio-production-bf14.up.railway.app/"

export async function sendData(data){
   try {
      await axios.post(apiRailway, data)
      return "enviado"
      
   } catch (error) {
      console.log(error)
   }
}

export async function visitAdd(query="true"){
   try {
      await axios.put(`${apiRailway}?visit=${query}`)
   } catch (error) {
      console.log(error)
   }
}


