import { db } from "../index.js";

export const obtenerDetallesFactura = (req,res)=>{

  db.query('CALL GetAllDetallesFactura()', (error,result)=>{
    if(error){
      console.log(error);
    }
    else{
      res.send(result);
    }
  })
}

export const agregarDetallesFactura = (req,res)=>{

  const fac_id = req.body.facId;
  const pro_id = req.body.proId;
  const det_precio_unitario = req.body.precio;
  const det_cantidad = req.body.cantidad;

  db.query('CALL InsertDetallesFactura(?,?,?,?)',[fac_id,pro_id,det_precio_unitario,det_cantidad], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al insertar el detalles_factura');
    }
    else{
      res.send(result);
    }
  })
};

export const actualizarDetallesFactura = (req,res)=>{

  const id = req.body.detId;
  const fac_id = req.body.facId;
  const pro_id = req.body.proId;
  const det_precio_unitario = req.body.precio;
  const det_cantidad = req.body.cantidad;

  console.log(id,fac_id,pro_id,det_precio_unitario,det_cantidad);

  db.query('CALL UpdateDetallesFactura(?,?,?,?,?)',[id,fac_id,pro_id,det_precio_unitario,det_cantidad], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al actualizar el detalles_factura');
    }
    else{
      res.send(result);
    }
  })
};

export const eliminarDetallesFactura = (req,res)=>{

  const id = req.params.id;

  db.query('CALL EliminarDetallesFactura(?)',id, 
  (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al eliminar el detalles_factura');
    }
    else{
      res.send(result);
    }
  })
};
