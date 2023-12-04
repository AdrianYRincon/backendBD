import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

//controllers 
import { obtenerProductos,agregarProducto,actualizarProducto,eliminarProducto } from './controllers/productosController.js';

import { obtenerClientes,agregarCliente,actualizarCliente,eliminarCliente } from './controllers/clienteController.js';

import { obtenerVehiculos,agregarVehiculo,actualizarVehiculo,eliminarVehiculo } from './controllers/vehiculoController.js';

import { obtenerEmpleados, agregarEmpleado, actualizarEmpleado, eliminarEmpleado} from './controllers/empleadoController.js';

import { obtenerDetallesFactura,agregarDetallesFactura,actualizarDetallesFactura,eliminarDetallesFactura } from './controllers/ventasController.js';

import { obtenerDetallesServicio, agregarDetallesServicio, actualizarDetallesServicio, eliminarDetallesServicio } from './controllers/serviciosController.js';

import { sp_vw_ventas_productos, sp_vw_servicios_realizados, sp_vw_producto_no_vendidos, sp_vw_Clientes_Frecuentes } from './controllers/viewsController.js';

import { totalProductos, totalServicios } from './controllers/totalVentas.js';

import { getCliente, getProducto } from './controllers/busquedasController.js';





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


// ** VENTAS PRODUCTOS ** //
//obtener ventas de la BD
app.get("/ventas", obtenerDetallesFactura);

//insertar un nueva venta
app.post("/addventa", agregarDetallesFactura);

//actualizar una venta
app.put("/updateventa", actualizarDetallesFactura);

//Eliminar una venta
app.delete("/deleteventa/:id", eliminarDetallesFactura);


// ** SERVICIOS REALIZADOS **// 
//obtener servicios realizados de la BD
app.get("/servicios",obtenerDetallesServicio );

//insertar un nuevo servicio
app.post("/addservice", agregarDetallesServicio);

//actualizar un servicio
app.put("/updateservice", actualizarDetallesServicio);

//Eliminar un servicios
app.delete("/deleteservice/:id", eliminarDetallesServicio);


// ** VIEWS ** //
// obtener registro ventas productos
app.get("/ventasproductos", sp_vw_ventas_productos);
// obtenemos registro servicios realizados
app.get("/serviciosrealizados", sp_vw_servicios_realizados);
//obtener productos no vendidos
app.get("/productosnovendidos", sp_vw_producto_no_vendidos);
//obtener clientes frecuentes
app.get("/clientesfrecuentes", sp_vw_Clientes_Frecuentes);



// ** VALORES TOTALES ** // 
app.get("/totalproductos", totalProductos);
app.get("/totalservicios",totalServicios);


//** BUSQUEDAS **/
app.get("/getclient/:cedula", getCliente);
app.get("/getproducto/:id", getProducto);


app.listen(3001, () => {
  console.log('Corriendo en el puerto 3001');
})