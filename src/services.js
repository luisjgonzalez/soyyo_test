const axios = require("axios");


async function getData(startId,endId){

    let response = [];
    for (let i = startId ; i < endId+1 ; i++  ) {
        let url = `https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/${i}`
        const axios_res  = await axios.get(url);

        let data = {}
  
        if (axios_res.status == 200 && axios_res.data.code == "F132" ){
         data = {
          entityId : axios_res.data.data.entityId,
          name : axios_res.data.data.name,
          identificationNumber : axios_res.data.data.identificationNumbe,
          expirationDate : axios_res.data.data.expirationDate,
          contactName	: axios_res.data.data.contactName,
          contactEmail : axios_res.data.data.contactName,
          logo : axios_res.data.data.logo
             }
             response.push(data)
  
        }
        else if (axios_res.status == 200 && axios_res.data.code == "F133" ){
            data = {
              entityId : i,
              mesage : axios_res.data.message
            }
            response.push(data);
        }
  
      }
      

    return response
}


function sortArray(x,y){

	if (x.name < y.name) return -1
	if (x.name > y.name ) return 1

}

module.exports = {sortArray , getData}