const createValidSubscriberFee = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.subscriber_id) !== "number" ||
             typeof(res.data.subscriber_access) !== "boolean" ||
             typeof(res.data.subscriber_intercity_access) !== "boolean" ||
             typeof(res.data.subscriber_fee) !== "number" ||
             typeof(res.data.subscriber_debt) !== "number" ||
             typeof(res.data.subscriber_intercity_debt) !== "number" ||
             typeof(res.data.debt_time) !== "number"){
                return res.status(400).send({
                    error: true,
                    message: "Invalid type"
                });
          }
          if(res.data.subscriber_id === undefined ||
             res.data.subscriber_access === undefined || 
             res.data.subscriber_intercity_access === undefined ||
             res.data.subscriber_fee === undefined || 
             res.data.subscriber_debt === undefined ||
             res.data.subscriber_intercity_debt === undefined ||
             res.data.debt_time === undefined ||
             res.data.subscriber_id === "" ||
             res.data.subscriber_access === "" || 
             res.data.subscriber_intercity_access === "" ||
             res.data.subscriber_fee === "" || 
             res.data.subscriber_debt === "" ||
             res.data.subscriber_intercity_debt === "" ||
             res.data.debt_time === ""){
                return res.status(400).send({
                    error: true,
                    message: "Fields must not be empty"
                });
          }
          if(res.data.subscriber_id > 2147483647 || res.data.subscriber_id < 0){
            return res.status(400).send({
                error: true,
                message: "Invalid subscriber id"
             });
        }
          if(res.data.subscriber_fee < 0){
            return res.status(400).send({
                error: true,
                message: "Subscriber fee cannot be negative"
             });
        } 
        if(res.data.subscriber_debt < 0){
            return res.status(400).send({
                error: true,
                message: "Subscriber debt cannot be negative"
             });
        } 
        if(res.data.subscriber_intercity_debt < 0){
            return res.status(400).send({
                error: true,
                message: "Subscriber intercity debt cannot be negative"
             });
        } 
        if(res.data.debt_time < 0){
            return res.status(400).send({
                error: true,
                message: "Debt time cannot be negative"
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

const updateValidSubscriberFee = (req, res, next) => {
    if(res.data){
        if(typeof(res.data.subscriber_access) !== "boolean" ||
             typeof(res.data.subscriber_intercity_access) !== "boolean" ||
             typeof(res.data.subscriber_fee) !== "number" ||
             typeof(res.data.subscriber_debt) !== "number" ||
             typeof(res.data.subscriber_intercity_debt) !== "number" ||
             typeof(res.data.debt_time) !== "number"){
                return res.status(400).send({
                    error: true,
                    message: "Invalid type"
                });
          }
          if(res.data.subscriber_access === undefined || 
             res.data.subscriber_intercity_access === undefined ||
             res.data.subscriber_fee === undefined || 
             res.data.subscriber_debt === undefined ||
             res.data.subscriber_intercity_debt === undefined ||
             res.data.debt_time === undefined ||
             res.data.subscriber_access === "" || 
             res.data.subscriber_intercity_access === "" ||
             res.data.subscriber_fee === "" || 
             res.data.subscriber_debt === "" ||
             res.data.subscriber_intercity_debt === "" ||
             res.data.debt_time === ""){
                return res.status(400).send({
                    error: true,
                    message: "Fields must not be empty"
                });
          }
          if(res.data.subscriber_fee < 0){
            return res.status(400).send({
                error: true,
                message: "Subscriber fee cannot be negative"
             });
        } 
        if(res.data.subscriber_debt < 0){
            return res.status(400).send({
                error: true,
                message: "Subscriber debt cannot be negative"
             });
        } 
        if(res.data.subscriber_intercity_debt < 0){
            return res.status(400).send({
                error: true,
                message: "Subscriber intercity debt cannot be negative"
             });
        } 
        if(res.data.debt_time < 0){
            return res.status(400).send({
                error: true,
                message: "Debt time cannot be negative"
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

exports.createValidSubscriberFee = createValidSubscriberFee;
exports.updateValidSubscriberFee = updateValidSubscriberFee;