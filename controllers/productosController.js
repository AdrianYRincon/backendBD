import { db } from "../index.js";

export const obtenerProductos = (req,res)=>{

  db.query('CALL GetProducts()', (error,result)=>{
    if(error){
      console.log(error);
    }
    else{
      res.send(result);
    }
  })
}


export const agregarProducto = (req,res)=>{

  const id = req.body.id;
  const nombre = req.body.nombre;
  const precio = req.body.precio;
  const cantidad = req.body.cantidad;

  db.query('CALL InsertProduct(?,?,?,?)',[id,nombre,precio,cantidad], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al insertar el producto');
    }
    else{
      res.send(result);
    }
  })
};
export const actualizarProducto = (req,res)=>{

  const id = req.body.id;
  const nombre = req.body.nombre;
  const precio = req.body.precio;
  const cantidad = req.body.cantidad;

  db.query('CALL UpdateProduct(?,?,?,?)',[id,nombre,precio,cantidad], (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al actualizar el producto');
    }
    else{
      res.send(result);
    }
  })
};
export const eliminarProducto = (req,res)=>{

  const id = req.params.id;

  db.query('CALL EliminarProducto(?)',id, 
  (error,result)=>{
    if(error){
      console.log(error);
      res.status(500).send('Error al eliminar el producto');
    }
    else{
      res.send(result);
    }
  })
};


