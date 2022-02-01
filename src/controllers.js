const axios = require("axios");
const { getData,sortArray } = require("./services.js");

async function getEntities(req,res) {

    const resp_error = {Error:"Error en validación datos de entrada"};

    try {
	const {startId,endId} = req.body;
    
    if (!startId || !endId){
        return res.status(400).json(resp_error)
    }

	let response = {
		range : {
			startId ,
			endId
		},
		entity : []
	}
    response.entity = await getData(startId,endId);
    response.entity = response.entity.sort(sortArray);

	return res.json(response).status(200); 

    }catch(e) {
        console.log(e);
        return res.status(404).json(resp_error);
    }


}

module.exports = getEntities