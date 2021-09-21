import { 
    BitnobBadKeyError, 
    BitnobRequiredParamError, 
    BitnobServerError, 
    BitnobUnauthorizedError, 
    BitnobQueryError, 
    BitnobRateLimitError, 
    BitnobBadRequestError,
} from './exceptions';

const errorClass:any = {
    400: BitnobBadRequestError,
    500: BitnobServerError,
    401: BitnobUnauthorizedError,
    429: BitnobRateLimitError,
    404: BitnobQueryError,
}

export {
    errorClass,
    BitnobBadKeyError, 
    BitnobRequiredParamError,
};