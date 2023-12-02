import { db } from "../index.js";

export const obtenerClientes = (req,res)=>{

  db.query('CALL GetClients()', (error,result)=>{
    if(error){
      console.log(error);
    }
    else{
      res.send(result);
    }
  })
}


export const agregarCliente = (req,res)=>{

  const cedula = req.body.cedula;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const email = req.body.email;
  const telefono = req.body.telefono;

  db.query('CALL InsertClient(?,?,?,?,?)',[cedula,nombre,apellido,email,telefono], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al insertar el cliente');
    }
    else{
      res.send(result);
    }
  })
};
export const actualizarCliente = (req,res)=>{

  const cedula = req.body.cedula;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const email = req.body.email;
  const telefono = req.body.telefono;

  db.query('CALL UpdateClient(?,?,?,?,?)',[cedula,nombre,apellido,email,telefono], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al actualizar el cliente');
    }
    else{
      res.send(result);
    }
  })
};
export const eliminarCliente = (req,res)=>{

  const cedula = req.params.cedula;

  db.query('CALL EliminarCliente(?)',cedula, 
  (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al eliminar el cliente');
    }
    else{
      res.send(result);
    }
  })
};

