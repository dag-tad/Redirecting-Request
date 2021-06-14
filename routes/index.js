const express = require('express');
const personalInformationController = require('../controllers/personalLoanController');
const personalLoanPostMiddleware = require('../middleware/personalLoanPostMiddleware');
const validatePersonalInformation = require('../middleware/personalInformationValidator');
const schema = require('../dtos/personalInformation');
/*const personalLoanPostMw = require('../middleware/personalLoanPostMiddleware');*/

const router = express.Router();
const url = "https://raw.githubusercontent.com/dag-tad/jobsinethiopia/main/db.json";
router.post('/create', 
                     validatePersonalInformation(schema), 
                     personalLoanPostMiddleware(url),
                     personalInformationController);

module.exports = router;