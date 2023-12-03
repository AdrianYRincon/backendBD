import { db } from "../index.js";


export const sp_vw_ventas_productos = (req, res) => {
  db.query('CALL sp_vw_ventas_productos()', (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
};

export const sp_vw_servicios_realizados = (req, res) => {
  db.query('CALL sp_vw_servicios_realizados()', (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
};

export const sp_vw_Clientes_Frecuentes = (req, res) => {
  db.query('CALL sp_vw_Clientes_Frecuentes()', (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
};

export const sp_vw_producto_no_vendidos = (req, res) => {
  db.query('CALL sp_vw_producto_no_vendidos()', (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
};
