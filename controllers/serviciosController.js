import { db } from "../index.js";

export const obtenerDetallesServicio = (req,res)=>{

  db.query('CALL GetAllDetallesServicio()', (error,result)=>{
    if(error){
      console.log(error);
    }
    else{
      res.send(result);
    }
  })
}

export const agregarDetallesServicio = (req,res)=>{

  const veh_placa = req.body.placa;
  const ser_id = req.body.serId;
  const emp_cedula = req.body.cedula;
  const fac_id = req.body.facId;
  const det_precio_servicio = req.body.precio;
  const det_cantidad = req.body.cantidad;

  db.query('CALL InsertDetallesServicio(?,?,?,?,?,?)',[veh_placa,ser_id,emp_cedula,fac_id,det_precio_servicio,det_cantidad], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al insertar el detalles_servicio');
    }
    else{
      res.send(result);
    }
  })
};

export const actualizarDetallesServicio = (req,res)=>{

  const id = req.body.id;
  const veh_placa = req.body.placa;
  const ser_id = req.body.serId;
  const emp_cedula = req.body.cedula;
  const fac_id = req.body.facId;
  const det_precio_servicio = req.body.precio;
  const det_cantidad = req.body.cantidad;

  db.query('CALL UpdateDetallesServicio(?,?,?,?,?,?,?)',[id,veh_placa,ser_id,emp_cedula,fac_id,det_precio_servicio,det_cantidad], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al actualizar el detalles_servicio');
    }
    else{
      res.send(result);
    }
  })
};

export const eliminarDetallesServicio = (req,res)=>{

  const id = req.params.id;

  db.query('CALL EliminarDetallesServicio(?)',id, 
  (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al eliminar el detalles_servicio');
    }
    else{
      res.send(result);
    }
  })
};
