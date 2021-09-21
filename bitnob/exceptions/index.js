const { 
    BitnobBadKeyError, 
    BitnobRequiredParamError, 
    BitnobServerError, 
    BitnobUnauthorizedError, 
    BitnobQueryError, 
    BitnobRateLimitError, 
    BitnobBadRequestError,
} = require('./exceptions')

const errorClass = {
    400: BitnobBadRequestError,
    500: BitnobServerError,
    401: BitnobUnauthorizedError,
    429: BitnobRateLimitError,
    404: BitnobQueryError,
}

module.exports = {
    errorClass,
    BitnobBadKeyError, 
    BitnobRequiredParamError,
};