const createValidQueueEntry = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.client_first_name) !== "string" ||
           typeof(res.data.client_second_name) !== "string" ||
           typeof(res.data.client_district) !== "string" ||
           typeof(res.data.client_street) !== "string" ||
           typeof(res.data.client_type) !== "string" ||
           typeof(res.data.desired_phone_type) !== "string"){
            return res.status(400).send({
                error: true,
                message: "Invalid type"
             });
        }
        if(res.data.client_first_name === undefined ||
           res.data.client_second_name === undefined ||
           res.data.client_district === undefined ||
           res.data.client_street === undefined ||
           res.data.client_type === undefined ||
           res.data.desired_phone_type === undefined ||
           res.data.client_first_name === "" ||
           res.data.client_second_name === "" ||
           res.data.client_district === "" ||
           res.data.client_street == "" ||
           res.data.client_type === "" ||
           res.data.desired_phone_type === ""){
            return res.status(400).send({
                error: true,
                message: "Fields must not be empty"
             });
        }
        if(res.data.client_first_name.length > 30){
            return res.status(400).send({
                error: true,
                message: "First name is too long"
             });
        }
        if(res.data.client_second_name.length > 30){
            return res.status(400).send({
                error: true,
                message: "Last name is too long"
             });
        }
        if(res.data.client_district.length > 30){
            return res.status(400).send({
                error: true,
                message: "District name is too long"
             });
        }
        if(res.data.client_street.length > 30){
            return res.status(400).send({
                error: true,
                message: "Street name is too long"
             });
        }
        if(res.data.client_type !== "standard" &&
           res.data.client_type !== "exemptionary"){
            return res.status(400).send({
                error: true,
                message: "Subscriber type doesn't exist"
             });
        }
        if(res.data.desired_phone_type !== "standard" &&
           res.data.desired_phone_type !== "parallel" &&
           res.data.desired_phone_type !== "dual"){
            return res.status(400).send({
                error: true,
                message: "Phone type doesn't exist"
             });
        }
        next();
    } else {
        return res.status(400).send({
            error: true,
            message: `${res.err}`
         });
    }
    
};

const updateValidNewQueueEntry = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.client_first_name) !== "string" ||
           typeof(res.data.client_second_name) !== "string" ||
           typeof(res.data.client_district) !== "string" ||
           typeof(res.data.client_street) !== "string" ||
           typeof(res.data.client_type) !== "string" ||
           typeof(res.data.desired_phone_type) !== "string"){
            return res.status(400).send({
                error: true,
                message: "Invalid type"
             });
        }
        if(res.data.client_first_name === undefined ||
           res.data.client_second_name === undefined ||
           res.data.client_district === undefined ||
           res.data.client_street === undefined ||
           res.data.client_type === undefined ||
           res.data.desired_phone_type === undefined ||
           res.data.client_first_name === "" ||
           res.data.client_second_name === "" ||
           res.data.client_district === "" ||
           res.data.client_street == "" ||
           res.data.client_type === "" ||
           res.data.desired_phone_type === ""){
            return res.status(400).send({
                error: true,
                message: "Fields must not be empty"
             });
        }
        if(res.data.client_first_name.length > 30){
            return res.status(400).send({
                error: true,
                message: "First name is too long"
             });
        }
        if(res.data.client_second_name.length > 30){
            return res.status(400).send({
                error: true,
                message: "Last name is too long"
             });
        }
        if(res.data.client_district.length > 30){
            return res.status(400).send({
                error: true,
                message: "District name is too long"
             });
        }
        if(res.data.client_street.length > 30){
            return res.status(400).send({
                error: true,
                message: "Street name is too long"
             });
        }
        if(res.data.client_type !== "standard" &&
           res.data.client_type !== "exemptionary"){
            return res.status(400).send({
                error: true,
                message: "Subscriber type doesn't exist"
             });
        }
        if(res.data.desired_phone_type !== "standard" &&
           res.data.desired_phone_type !== "parallel" &&
           res.data.desired_phone_type !== "dual"){
            return res.status(400).send({
                error: true,
                message: "Phone type doesn't exist"
             });
        }
        next();
    } else {
        return res.status(400).send({
            error: true,
            message: `${res.err}`
         });
    }
    
};

exports.createValidQueueEntry = createValidQueueEntry;
exports.updateValidNewQueueEntry = updateValidNewQueueEntry;