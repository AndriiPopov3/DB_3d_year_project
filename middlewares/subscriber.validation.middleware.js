const QueryService = require('../services/queryService');

const createValidSubscriber = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.subscriber_first_name) !== "string" ||
           typeof(res.data.subscriber_last_name) !== "string" || 
           typeof(res.data.subscriber_age) !== "number" ||
           typeof(res.data.subscriber_gender) !== "string" ||
           typeof(res.data.subscriber_address_index) !== "string" ||
           typeof(res.data.subscriber_address_district) !== "string" ||
           typeof(res.data.subscriber_address_street) !== "string" ||
           typeof(res.data.subscriber_phone) !== "string" ||
           typeof(res.data.subscriber_phone_type) !== "string" ||
           typeof(res.data.subscriber_type) !== "string" ||
           typeof(res.data.station_id) !== "number"){
            return res.status(400).send({
                error: true,
                message: "Invalid type"
             });
        }
        if(res.data.subscriber_first_name === undefined ||
           res.data.subscriber_last_name === undefined || 
           res.data.subscriber_age === undefined ||
           res.data.subscriber_gender === undefined ||
           res.data.subscriber_address_index === undefined ||
           res.data.subscriber_address_district === undefined ||
           res.data.subscriber_address_street === undefined ||
           res.data.subscriber_phone === undefined ||
           res.data.subscriber_phone_type === undefined ||
           res.data.subscriber_type === undefined ||
           res.data.station_id === undefined ||
           res.data.subscriber_first_name === "" ||
           res.data.subscriber_last_name === "" || 
           res.data.subscriber_age === "" ||
           res.data.subscriber_gender === "" ||
           res.data.subscriber_address_index === "" ||
           res.data.subscriber_address_district == "" ||
           res.data.subscriber_address_street === "" ||
           res.data.subscriber_phone === "" ||
           res.data.subscriber_phone_type === "" ||
           res.data.subscriber_type === "" ||
           res.data.station_id === ""){
            return res.status(400).send({
                error: true,
                message: "Fields must not be empty"
             });
        }
        if(res.data.subscriber_first_name.length > 30){
            return res.status(400).send({
                error: true,
                message: "First name is too long"
             });
        }
        if(res.data.subscriber_last_name.length > 30){
            return res.status(400).send({
                error: true,
                message: "Last name is too long"
             });
        }
        if(res.data.subscriber_age > 120 || res.data.subscriber_age < 18){
            return res.status(400).send({
                error: true,
                message: "Age must be between 18 and 120"
             });
        }
        if(res.data.subscriber_gender.length > 1){
            return res.status(400).send({
                error: true,
                message: "Gender must be 1 character long"
             });
        }
        if(res.data.subscriber_gender !== 'M' && res.data.subscriber_gender !== 'F'){
            return res.status(400).send({
                error: true,
                message: "Gender must be binary"
             });
        }
        if(res.data.subscriber_address_index.length !== 5){
            return res.status(400).send({
                error: true,
                message: "Index must be 5 numbers long"
             });
        }
        if(/[a-zA-Z]/.test(res.data.subscriber_address_index)){
            return res.status(400).send({
                error: true,
                message: "Index must not include letters"
             });
        }
        if(res.data.subscriber_address_district.length > 30){
            return res.status(400).send({
                error: true,
                message: "District name is too long"
             });
        }
        if(res.data.subscriber_address_street.length > 30){
            return res.status(400).send({
                error: true,
                message: "Street name is too long"
             });
        }
        if(res.data.subscriber_phone.length > 30){
            return res.status(400).send({
                error: true,
                message: "Phone is too long"
             });
        }
        if(/[a-zA-Z]/.test(res.data.subscriber_phone)){
            return res.status(400).send({
                error: true,
                message: "Phone must not include letters"
             });
        }
        if(res.data.subscriber_phone_type !== "standard" &&
           res.data.subscriber_phone_type !== "parallel" &&
           res.data.subscriber_phone_type !== "dual"){
            return res.status(400).send({
                error: true,
                message: "Phone type doesn't exist"
             });
        }
        if(res.data.subscriber_type !== "standard" &&
           res.data.subscriber_type !== "exemptionary"){
            return res.status(400).send({
                error: true,
                message: "Subscriber type doesn't exist"
             });
        }
        // if(!QueryService.doesStationExist(res.data.station_id)){
        //     return res.status(400).send({
        //         error: true,
        //         message: "Station does not exist"
        //      });
        // }
        next();
    } else {
        return res.status(400).send({
            error: true,
            message: `${res.err}`
         });
    }
    
    
}

const updateValidSubscriber = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.subscriber_first_name) !== "string" ||
           typeof(res.data.subscriber_last_name) !== "string" || 
           typeof(res.data.subscriber_age) !== "number" ||
           typeof(res.data.subscriber_gender) !== "string" ||
           typeof(res.data.subscriber_address_index) !== "string" ||
           typeof(res.data.subscriber_address_district) !== "string" ||
           typeof(res.data.subscriber_address_street) !== "string" ||
           typeof(res.data.subscriber_phone) !== "string" ||
           typeof(res.data.subscriber_phone_type) !== "string" ||
           typeof(res.data.subscriber_type) !== "string" ||
           typeof(res.data.station_id) !== "number"){
            return res.status(400).send({
                error: true,
                message: "Invalid type"
             });
        }
        if(res.data.subscriber_first_name === undefined ||
           res.data.subscriber_last_name === undefined || 
           res.data.subscriber_age === undefined ||
           res.data.subscriber_gender === undefined ||
           res.data.subscriber_address_index === undefined ||
           res.data.subscriber_address_district === undefined ||
           res.data.subscriber_address_street === undefined ||
           res.data.subscriber_phone === undefined ||
           res.data.subscriber_phone_type === undefined ||
           res.data.subscriber_type === undefined ||
           res.data.station_id === undefined ||
           res.data.subscriber_first_name === "" ||
           res.data.subscriber_last_name === "" || 
           res.data.subscriber_age === "" ||
           res.data.subscriber_gender === "" ||
           res.data.subscriber_address_index === "" ||
           res.data.subscriber_address_district == "" ||
           res.data.subscriber_address_street === "" ||
           res.data.subscriber_phone === "" ||
           res.data.subscriber_phone_type === "" ||
           res.data.subscriber_type === "" ||
           res.data.station_id === ""){
            return res.status(400).send({
                error: true,
                message: "Fields must not be empty"
             });
        }
        if(res.data.subscriber_first_name.length > 30){
            return res.status(400).send({
                error: true,
                message: "First name is too long"
             });
        }
        if(res.data.subscriber_last_name.length > 30){
            return res.status(400).send({
                error: true,
                message: "Last name is too long"
             });
        }
        if(res.data.subscriber_age > 120 || res.data.subscriber_age < 18){
            return res.status(400).send({
                error: true,
                message: "Age must be between 18 and 120"
             });
        }
        if(res.data.subscriber_gender.length > 1){
            return res.status(400).send({
                error: true,
                message: "Gender must be 1 character long"
             });
        }
        if(res.data.subscriber_gender !== 'M' && res.data.subscriber_gender !== 'F'){
            return res.status(400).send({
                error: true,
                message: "Gender must be binary"
             });
        }
        if(res.data.subscriber_address_index.length !== 5){
            return res.status(400).send({
                error: true,
                message: "Index must be 5 numbers long"
             });
        }
        if(/[a-zA-Z]/.test(res.data.subscriber_address_index)){
            return res.status(400).send({
                error: true,
                message: "Index must not include letters"
             });
        }
        if(res.data.subscriber_address_district.length > 30){
            return res.status(400).send({
                error: true,
                message: "District name is too long"
             });
        }
        if(res.data.subscriber_address_street.length > 30){
            return res.status(400).send({
                error: true,
                message: "Street name is too long"
             });
        }
        if(res.data.subscriber_phone.length > 30){
            return res.status(400).send({
                error: true,
                message: "Phone is too long"
             });
        }
        if(/[a-zA-Z]/.test(res.data.subscriber_phone)){
            return res.status(400).send({
                error: true,
                message: "Phone must not include letters"
             });
        }
        if(res.data.subscriber_phone_type !== "standard" &&
           res.data.subscriber_phone_type !== "parallel" &&
           res.data.subscriber_phone_type !== "dual"){
            return res.status(400).send({
                error: true,
                message: "Phone type doesn't exist"
             });
        }
        if(res.data.subscriber_type !== "standard" &&
           res.data.subscriber_type !== "exemptionary"){
            return res.status(400).send({
                error: true,
                message: "Subscriber type doesn't exist"
             });
        }
        // if(!QueryService.doesStationExist(res.data.station_id)){
        //     return res.status(400).send({
        //         error: true,
        //         message: "Station does not exist"
        //      });
        // }
        next();
    } else {
        return res.status(400).send({
            error: true,
            message: `${res.err}`
         });
    }
    
    
}

exports.createValidSubscriber = createValidSubscriber;
exports.updateValidSubscriber = updateValidSubscriber;