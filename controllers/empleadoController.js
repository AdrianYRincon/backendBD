import { db } from "../index.js";

export const obtenerEmpleados = (req,res)=>{

  db.query('CALL GetEmpleados()', (error,result)=>{
    if(error){
      console.log(error);
    }
    else{
      res.send(result);
    }
  })
}


export const agregarEmpleado = (req,res)=>{

  const cedula = req.body.cedula;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const sueldo = req.body.sueldo;
  

  db.query('CALL InsertEmpleado(?,?,?,?)',[cedula,nombre,apellido,sueldo], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al insertar el empleado');
    }
    else{
      res.send(result);
    }
  })
};
export const actualizarEmpleado = (req,res)=>{

  const cedula = req.body.cedula;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const sueldo = req.body.sueldo;

  db.query('CALL UpdateEmpleado(?,?,?,?)',[cedula,nombre,apellido,sueldo], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al actualizar el empleado');
    }
    else{
      res.send(result);
    }
  })
};
export const eliminarEmpleado = (req,res)=>{

  const cedula = req.params.cedula;

  db.query('CALL EliminarEmpleado(?)',cedula, 
  (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al eliminar el empleado');
    }
    else{
      res.send(result);
    }
  })
};
