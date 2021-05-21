const createValidPublicPhone = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.public_phone_type) !== "string" ||
             typeof(res.data.station_id) !== "number" ||
             typeof(res.data.public_phone_address_district) !== "string" ||
             typeof(res.data.public_phone_address_street) !== "string"){
                return res.status(400).send({
                    error: true,
                    message: "Invalid type"
                });
          }
          if(res.data.public_phone_type === undefined ||
             res.data.station_id === undefined || 
             res.data.public_phone_address_district === undefined ||
             res.data.public_phone_address_street === undefined || 
             res.data.public_phone_type === "" ||
             res.data.station_id === "" ||
             res.data.public_phone_address_district === "" ||
             res.data.public_phone_address_street === ""){
                return res.status(400).send({
                    error: true,
                    message: "Fields must not be empty"
                });
          }
          if(res.data.public_phone_type !== "public" &&
             res.data.public_phone_type !== "payphone"){
            return res.status(400).send({
                error: true,
                message: "Invalid public phone type"
             });
        }
        if(res.data.station_id > 2147483647 || res.data.station_id < 0){
            return res.status(400).send({
                error: true,
                message: "Invalid station id"
             });
        }
          if(res.data.public_phone_address_district.length > 30){
            return res.status(400).send({
                error: true,
                message: "Public phone address district is too long"
             });
        } 
        if(res.data.public_phone_address_street.length > 30){
            return res.status(400).send({
                error: true,
                message: "Public phone address street is too long"
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

const updateValidPublicPhone = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.public_phone_type) !== "string" ||
             typeof(res.data.station_id) !== "number" ||
             typeof(res.data.public_phone_address_district) !== "string" ||
             typeof(res.data.public_phone_address_street) !== "string"){
                return res.status(400).send({
                    error: true,
                    message: "Invalid type"
                });
          }
          if(res.data.public_phone_type === undefined ||
             res.data.station_id === undefined || 
             res.data.public_phone_address_district === undefined ||
             res.data.public_phone_address_street === undefined || 
             res.data.public_phone_type === "" ||
             res.data.station_id === "" ||
             res.data.public_phone_address_district === "" ||
             res.data.public_phone_address_street === ""){
                return res.status(400).send({
                    error: true,
                    message: "Fields must not be empty"
                });
          }
          if(res.data.public_phone_type !== "public" &&
             res.data.public_phone_type !== "payphone"){
            return res.status(400).send({
                error: true,
                message: "Invalid public phone type"
             });
        }
          if(res.data.public_phone_address_district.length > 30){
            return res.status(400).send({
                error: true,
                message: "Public phone address district is too long"
             });
        } 
        if(res.data.public_phone_address_street.length > 30){
            return res.status(400).send({
                error: true,
                message: "Public phone address street is too long"
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

exports.createValidPublicPhone = createValidPublicPhone;
exports.updateValidPublicPhone = updateValidPublicPhone;