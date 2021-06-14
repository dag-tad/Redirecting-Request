const apiError = require('./apiError');

function apiErrorHandler(err, req, res, next){
    if(err instanceof ApiError){
        return res.status(err.code).json(err.message);
    }
    else{
        return res.status(500).json({'internal server error' : 'pppp'});
    }
}

module.exports = apiErrorHandler;