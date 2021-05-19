const createValidStation = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.station_id) !== "number" ||
             typeof(res.data.station_type) !== "string"){
                return res.status(400).send({
                    error: true,
                    message: "Invalid type"
                });
          }
          if(res.data.station_id === undefined ||
             res.data.station_type === undefined || 
             res.data.station_id === "" ||
             res.data.station_type === ""){
                return res.status(400).send({
                    error: true,
                    message: "Fields must not be empty"
                });
          }
          if(res.data.station_type !== "municipal" &&
             res.data.station_type !== "departmental" &&
             res.data.station_type !== "constituent"){
            return res.status(400).send({
                error: true,
                message: "Invalid station type"
             });
        }
        next();
    } else {
        return res.status(400).send({
            error: true,
            message: `${res.err}`
         });
    }
    
}

const updateValidStation = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.station_type) !== "string"){
                return res.status(400).send({
                    error: true,
                    message: "Invalid type"
                });
          }
          if(res.data.station_type === undefined || 
             res.data.station_type === ""){
                return res.status(400).send({
                    error: true,
                    message: "Fields must not be empty"
                });
          }
          if(res.data.station_type !== "municipal" &&
             res.data.station_type !== "departmental" &&
             res.data.station_type !== "constituent"){
            return res.status(400).send({
                error: true,
                message: "Invalid station type"
             });
        }
        next();
    } else {
        return res.status(400).send({
            error: true,
            message: `${res.err}`
         });
    }
    
}

exports.createValidStation = createValidStation;
exports.updateValidStation = updateValidStation;