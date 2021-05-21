const updateUserRoleEntry = (req, res, next) => {
    if(res.data){
        if(res.data.user_role === undefined ||
            res.data.user_role === ""){
                return res.status(400).send({
                    error: true,
                    message: "Fields must not be empty"
                 });
            }
        if(res.data.user_role !== "admin" &&
           res.data.user_role !== "manager" &&
           res.data.user_role !== "member"){
            return res.status(400).send({
                error: true,
                message: "Invalid user role"
             });
           }
                next();
    }else{
        return res.status(400).send({
            error: true,
            message: "Invalid data type"
         });
    }
    
};

exports.updateUserRoleEntry = updateUserRoleEntry;