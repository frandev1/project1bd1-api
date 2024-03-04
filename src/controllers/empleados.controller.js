import { getConnection } from "../database/connection";
import sql from 'mssql';

export const getEmpleados = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
    .output('OutResultCode', sql.Int)
    .execute('dbo.ListarEmpleados');
    console.log(result.recordset);
    res.json(result.recordset);
    return result.recordset;
}

export const createNewEmpleado = async (req, res) => {
    const {nombre, salario} = req.body;
    if(nombre == null || salario == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'});
    }

    console.log(nombre, salario);

    const pool = await getConnection();
    const result = await pool.request()
    .input('inNombre', sql.VarChar, nombre)
    .input('inSalario', sql.Money, salario)
    .output('OutResultCode', sql.Int,0)
    .execute('dbo.InsertarEmpleado');

    console.log(result.recordset);
    return res.json(result.recordset);
};
