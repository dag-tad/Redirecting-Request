const personalInformationController = function(err, req, res, next){
    if(err){
        res.status(500).json(err);
    }
    else {
        res.status(200).json({'done' : 'from controller'});
    }
}

module.exports = personalInformationController;