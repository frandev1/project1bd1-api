import { ListarEmpleadosRepo } from '../repo/repo';

export const getEmpleados = async (req, res) => {
    try {
        const empleados = await ListarEmpleadosRepo();
        res.status(200).json(
            {empleados});
    } catch (error) {
        res.status(500).json({msg: 'Internal Server Error'});
    }
}

export const createNewEmpleado = async (req, res) => {
    const {nombre, salario} = req.body;
    if(nombre == null || salario == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'});
    }

    console.log(nombre, salario);
    
    const result = await InsertarEmpleadoRepo(nombre, salario);
    if(result === false){
        return res.status(500).json({msg: 'Internal Server Error'});
    }
    res.status(200).json({msg: 'Empleado creado'});

    console.log(result.recordset);
    return result.recordset;
};
