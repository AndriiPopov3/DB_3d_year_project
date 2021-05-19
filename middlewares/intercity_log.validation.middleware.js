const moment = require('moment');

const createValidIntercityLogEntry = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.intercity_call_date) !== "string" ||
             typeof(res.data.subscriber_id) !== "number" ||
             typeof(res.data.station_id) !== "number" ||
             typeof(res.data.intercity_call_destination) !== "string"){
                return res.status(400).send({
                    error: true,
                    message: "Invalid type"
                });
          }
          if(res.data.intercity_call_date === undefined ||
             res.data.subscriber_id === undefined || 
             res.data.station_id === undefined ||
             res.data.intercity_call_destination === undefined || 
             res.data.intercity_call_date === "" ||
             res.data.subscriber_id === "" ||
             res.data.station_id === "" ||
             res.data.intercity_call_destination === ""){
                return res.status(400).send({
                    error: true,
                    message: "Fields must not be empty"
                });
          }
          if(!moment(res.data.intercity_call_date, "YYYY-MM-DD", true).isValid()){
            return res.status(400).send({
                error: true,
                message: "Invalid date format"
             });
        }
          if(res.data.intercity_call_destination.length > 30){
            return res.status(400).send({
                error: true,
                message: "Destination name is too long"
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

const updateValidIntercityLogEntry = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.intercity_call_date) !== "string" ||
             typeof(res.data.subscriber_id) !== "number" ||
             typeof(res.data.station_id) !== "number" ||
             typeof(res.data.intercity_call_destination) !== "string"){
                return res.status(400).send({
                    error: true,
                    message: "Invalid type"
                });
          }
          if(res.data.intercity_call_date === undefined ||
             res.data.subscriber_id === undefined || 
             res.data.station_id === undefined ||
             res.data.intercity_call_destination === undefined || 
             res.data.intercity_call_date === "" ||
             res.data.subscriber_id === "" ||
             res.data.station_id === "" ||
             res.data.intercity_call_destination === ""){
                return res.status(400).send({
                    error: true,
                    message: "Fields must not be empty"
                });
          }
          if(!moment(res.data.intercity_call_date, "YYYY-MM-DD", true).isValid()){
            return res.status(400).send({
                error: true,
                message: "Invalid date format"
             });
        }
          if(res.data.intercity_call_destination.length > 30){
            return res.status(400).send({
                error: true,
                message: "Destination name is too long"
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

exports.createValidIntercityLogEntry = createValidIntercityLogEntry;
exports.updateValidIntercityLogEntry = updateValidIntercityLogEntry;