const apiError = require('../error/apiError');

validatePersonalInformation = function(schema){
    return async function(req, res, next){
        try{
            const validateObject = await schema.validate(req.body);
            req.body = validateObject;
            next();
        }
        catch(err){
            next(apiError.badRequest(err));
        }
    }
}

module.exports = validatePersonalInformation;