import { db } from "../index.js";

export const getCliente = (req,res)=>{

  const cedula = req.params.cedula;

  db.query('CALL GetCliente(?)',cedula, 
  (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al obtener el cliente');
    }
    else{
      res.send(result);
    }
  })
};

export const getProducto = (req,res)=>{

  const id = req.params.id;

  db.query('CALL GetProducto(?)',id, 
  (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al obtener el producto');
    }
    else{
      res.send(result);
    }
  })
};

