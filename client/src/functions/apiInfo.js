import axios from "axios"


const apiRailway = "https://portfolio-production-bf14.up.railway.app/"

export async function sendData(data){
   await axios.post(apiRailway, data)
   return "enviado"
}

export async function visitAdd(query){
   await axios.put(`${apiRailway}/visits/?visit=${query}`)
}


