const request = require("request");

personalLoanInformationPost = function(url){
    return function(req, res, next){
        request.get(url, (error, response, body) => {
            if(error){
                res.status(400).json('error....');
            }
            else{
            res.status(200).json(body);
            }
        });
    }
}

module.exports = personalLoanInformationPost;