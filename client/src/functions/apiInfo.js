import axios from "axios"


const apiRailwai = "http://localhost:3001/"//"https://portfolio-production-77df.up.railway.app/"

export async function sendData(data){
   await axios.post(apiRailwai, data)
   return "enviado"
}

export async function visitAdd(query){
   await axios.put(apiRailwai + "?visit="+ query)
}


