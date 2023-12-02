import { db } from "../index.js";

export const obtenerVehiculos = (req,res)=>{

  db.query('CALL GetVehicles()', (error,result)=>{
    if(error){
      console.log(error);
    }
    else{
      res.send(result);
    }
  })
}


export const agregarVehiculo = (req,res)=>{

  const placa = req.body.placa;
  const cedula = req.body.cedula;
  const kilometraje = req.body.kilometraje;
  const marca = req.body.marca;
  const fechaUltimaRevision = req.body.fechaUltimaRevision;

  db.query('CALL InsertVehicle(?,?,?,?,?)',[placa,cedula,kilometraje,fechaUltimaRevision,marca], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al insertar el vehiculo');
    }
    else{
      res.send(result);
    }
  })
};
export const actualizarVehiculo = (req,res)=>{

  const placa = req.body.placa;
  const cedula = req.body.cedula;
  const kilometraje = req.body.kilometraje;
  const fechaUltimaRevision = req.body.fechaUltimaRevision;
  const marca = req.body.marca;

  db.query('CALL UpdateVehicle(?,?,?,?,?)',[placa,cedula,kilometraje,fechaUltimaRevision,marca], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al actualizar el vehiculo');
    }
    else{
      res.send(result);
    }
  })
};
export const eliminarVehiculo = (req,res)=>{

  const placa = req.params.placa;

  db.query('CALL EliminarVehiculo(?)',placa, 
  (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al eliminar el vehiculo');
    }
    else{
      res.send(result);
    }
  })
};
