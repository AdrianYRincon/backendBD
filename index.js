import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

//controllers
import { obtenerProductos,agregarProducto,actualizarProducto,eliminarProducto } from './controllers/productosController.js';

import { obtenerClientes,agregarCliente,actualizarCliente,eliminarCliente } from './controllers/clienteController.js';

import { obtenerVehiculos,agregarVehiculo,actualizarVehiculo,eliminarVehiculo } from './controllers/vehiculoController.js';

import { obtenerEmpleados, agregarEmpleado, actualizarEmpleado, eliminarEmpleado} from './controllers/empleadoController.js';



const app = express();

app.use(cors());
app.use(express.json());

//creamos la conexion a la BD
export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"12345",
  database:"lubricantes"
});

//Verificamos si la conexion se realizo
db.connect((error) => {
  if(error) {
    console.error('Error al conectar a la base de datos:',error);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// ** PRODUCTOS ** //

//obtener productos de la BD
app.get("/productos",obtenerProductos);

//insertar un nuevo producto
app.post("/insert", agregarProducto);

//actualizar un producto
app.put("/update", actualizarProducto);

//Eliminar un producto
app.delete("/delete/:id", eliminarProducto)



// ** CLIENTES ** //

//obtener clientes de la BD
app.get("/clientes", obtenerClientes);

//insertar un nuevo cliente
app.post("/insertclient", agregarCliente );

//actualizar un cliente
app.put("/updateclient", actualizarCliente);

//Eliminar un cliente
app.delete("/deleteclient/:cedula", eliminarCliente)


// ** VEHICULOS ** //

//obtener vehiculos de la BD
app.get("/vehiculos", obtenerVehiculos);

//insertar un nuevo vehiculo
app.post("/insertvehicle", agregarVehiculo );

//actualizar un vehiculo
app.put("/updatevehicle", actualizarVehiculo);

//Eliminar un vehiculo
app.delete("/deletevehicle/:placa", eliminarVehiculo)


// ** EMPLEADOS ** //

//obtener empleados de la BD
app.get("/empleados", obtenerEmpleados);

//insertar un nuevo empleado
app.post("/insertemployee", agregarEmpleado);

//actualizar un empleado
app.put("/updateemployee", actualizarEmpleado);

//Eliminar un empleado
app.delete("/deleteemployee/:cedula", eliminarEmpleado);


// ** COMPRAS ** //







app.listen(3001, () => {
  console.log('Corriendo en el puerto 3001');
})