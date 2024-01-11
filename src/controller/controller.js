const { Clientes } = require("../database/bancoDeDados");




const consultaCliente = async (req, res)=> {
        return res.status(202).json(Clientes)
}


module.exports = {consultaCliente}