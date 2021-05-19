
const createValidPhone = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.station_id) !== "number" ||
             typeof(res.data.phone_number) !== "string" ||
             typeof(res.data.number_availability) !== "boolean"){
                return res.status(400).send({
                    error: true,
                    message: "Invalid type"
                });
          }
          if(res.data.station_id === undefined ||
             res.data.phone_number === undefined || 
             res.data.number_availability === undefined ||
             res.data.station_id === "" ||
             res.data.phone_number === "" || 
             res.data.number_availability === ""){
                return res.status(400).send({
                    error: true,
                    message: "Fields must not be empty"
                });
          }
          if(res.data.phone_number.length > 30){
            return res.status(400).send({
                error: true,
                message: "Phone is too long"
             });
        }
        if(/[a-zA-Z]/.test(res.data.phone_number)){
            return res.status(400).send({
                error: true,
                message: "Phone must not include letters"
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

const updateValidPhone = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.station_id) !== "number" ||
             typeof(res.data.phone_number) !== "string" ||
             typeof(res.data.number_availability) !== "boolean"){
                return res.status(400).send({
                    error: true,
                    message: "Invalid type"
                });
          }
          if(res.data.station_id === undefined ||
             res.data.phone_number === undefined || 
             res.data.number_availability === undefined ||
             res.data.station_id === "" ||
             res.data.phone_number === "" || 
             res.data.number_availability === ""){
                return res.status(400).send({
                    error: true,
                    message: "Fields must not be empty"
                });
          }
          if(res.data.phone_number.length > 30){
            return res.status(400).send({
                error: true,
                message: "Phone is too long"
             });
        }
        if(/[a-zA-Z]/.test(res.data.phone_number)){
            return res.status(400).send({
                error: true,
                message: "Phone must not include letters"
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

exports.createValidPhone = createValidPhone;
exports.updateValidPhone = updateValidPhone;