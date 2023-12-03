import { db } from "../index.js";

export const totalProductos = (req,res)=>{

  db.query('CALL ventasTotales()', (error,result)=>{
    if(error){
      console.log(error);
    }
    else{
      res.send(result);
    }
  })
}

export const totalServicios = (req,res)=>{

  db.query('CALL TotalServicePrice()', (error,result)=>{
    if(error){
      console.log(error);
    }
    else{
      res.send(result);
    }
  })
}
