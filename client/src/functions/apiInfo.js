import axios from "axios"


const apiRailwai = "https://portfolio-production-77df.up.railway.app/"

export async function sendData(data){
   await axios.post(apiRailwai, data)
   return "enviado"
}


