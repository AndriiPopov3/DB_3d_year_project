const createValidQueue = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.queue_entry_id) !== "number" ||
           typeof(res.data.queue_type) !== "string" || 
           typeof(res.data.client_first_name) !== "string" ||
           typeof(res.data.client_second_name) !== "string" ||
           typeof(res.data.client_district) !== "string" ||
           typeof(res.data.client_street) !== "string" ||
           typeof(res.data.client_type) !== "string" ||
           typeof(res.data.desired_phone_type) !== "string" ||
           typeof(res.data.station_id) !== "number" ||
           typeof(res.data.availability) !== "boolean"){
            return res.status(400).send({
                error: true,
                message: "Invalid type"
             });
        }
        if(res.data.queue_entry_id === undefined ||
           res.data.queue_type === undefined || 
           res.data.client_first_name === undefined ||
           res.data.client_second_name === undefined ||
           res.data.client_district === undefined ||
           res.data.client_street === undefined ||
           res.data.client_type === undefined ||
           res.data.desired_phone_type === undefined ||
           res.data.station_id === undefined ||
           res.data.availability === undefined ||
           res.data.queue_entry_id === "" ||
           res.data.queue_type === "" || 
           res.data.client_first_name === "" ||
           res.data.client_second_name === "" ||
           res.data.client_district === "" ||
           res.data.client_street == "" ||
           res.data.client_type === "" ||
           res.data.desired_phone_type === "" ||
           res.data.station_id === "" ||
           res.data.availability === ""){
            return res.status(400).send({
                error: true,
                message: "Fields must not be empty"
             });
        }
        if(res.data.queue_entry_id > 2147483647 || res.data.queue_entry_id < 0){
            return res.status(400).send({
                error: true,
                message: "Invalid station id"
             });
        }
        if(res.data.queue_type !== "standard" &&
           res.data.queue_type !== "exemptionary"){
            return res.status(400).send({
                error: true,
                message: "Queue type doesn't exist"
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
                message: "Client type doesn't exist"
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
        if(res.data.station_id > 2147483647 || res.data.station_id < 0){
            return res.status(400).send({
                error: true,
                message: "Invalid station id"
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

const updateValidQueue = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.queue_entry_id) !== "number" ||
           typeof(res.data.queue_type) !== "string" || 
           typeof(res.data.client_first_name) !== "string" ||
           typeof(res.data.client_second_name) !== "string" ||
           typeof(res.data.client_district) !== "string" ||
           typeof(res.data.client_street) !== "string" ||
           typeof(res.data.client_type) !== "string" ||
           typeof(res.data.desired_phone_type) !== "string" ||
           typeof(res.data.station_id) !== "number" ||
           typeof(res.data.availability) !== "boolean"){
            return res.status(400).send({
                error: true,
                message: "Invalid type"
             });
        }
        if(res.data.queue_entry_id === undefined ||
           res.data.queue_type === undefined || 
           res.data.client_first_name === undefined ||
           res.data.client_second_name === undefined ||
           res.data.client_district === undefined ||
           res.data.client_street === undefined ||
           res.data.client_type === undefined ||
           res.data.desired_phone_type === undefined ||
           res.data.station_id === undefined ||
           res.data.availability === undefined ||
           res.data.queue_entry_id === "" ||
           res.data.queue_type === "" || 
           res.data.client_first_name === "" ||
           res.data.client_second_name === "" ||
           res.data.client_district === "" ||
           res.data.client_street == "" ||
           res.data.client_type === "" ||
           res.data.desired_phone_type === "" ||
           res.data.station_id === "" ||
           res.data.availability === ""){
            return res.status(400).send({
                error: true,
                message: "Fields must not be empty"
             });
        }
        if(res.data.queue_entry_id > 2147483647 || res.data.queue_entry_id < 0){
            return res.status(400).send({
                error: true,
                message: "Invalid station id"
             });
        }
        if(res.data.queue_type !== "standard" &&
           res.data.queue_type !== "exemptionary"){
            return res.status(400).send({
                error: true,
                message: "Subscriber type doesn't exist"
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
        if(res.data.station_id > 2147483647 || res.data.station_id < 0){
            return res.status(400).send({
                error: true,
                message: "Invalid station id"
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

exports.createValidQueue = createValidQueue;
exports.updateValidQueue = updateValidQueue;