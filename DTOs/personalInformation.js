const yup = require("yup");

module.exports = yup.object().shape({
    productTypes : yup.array().required(),
    personalInformation : yup.object().shape({
        firstName : yup.string().trim().required(),
        lastName : yup.string().trim().required(),
        email : yup.string().required().email(),
        city : yup.string().trim().required(),
        state : yup.string().trim().required(),
        primaryPhone : yup.string().trim().required(),
        address1 : yup.string().trim().required(),
        address2 : yup.string().trim().required(),
        zipcode : yup.string().trim().required(),
        dateOfBirth : yup.date().required()
    }),
    loanInformation : yup.object().shape({
        purpose : yup.string().trim().required(),
        loanAmount : yup.number().required()
    }),
    mortgageInformation : yup.object().shape({
        propertyStatus : yup.string().trim().required()
    }),
    creditInformation : yup.object().shape({
        providedCreditRating : yup.string().trim().required()
    }),
    financialInformation : yup.object().shape({
        employmentStatus : yup.string().trim().required(),
        employmentStatus : yup.string().trim().required(),
        anualIncome : yup.number(),
    }),
    legalInformation : yup.object().shape({
        consentsToFcra : yup.bool(),
        consentsToTcpa : yup.bool(),
        tcpaLanguage : yup.string().trim().required()
    }),
    clientTags : yup.object().shape({
        subId : yup.array().required(),
    })

});