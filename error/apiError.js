class ApiError{
    constructor(code, message){
        this.code = code;
        this.message = message;
    }

    static badRequest(message){
        return new ApiError(400, message);
    }
}

module.exports = ApiError;