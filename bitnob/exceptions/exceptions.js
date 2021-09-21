class BitnobBadKeyError extends Error {
    constructor(message = "API Key is not set") {
        super(message); 
        this.name = "BitnobBadKeyError"; 
    }
}

class BitnobRequiredParamError extends Error {
    constructor(message) {
      super(message); 
      this.name = "BitnobRequiredParamError"; 
    }
}

class BitnobServerError extends Error {
    constructor(errorMessage) {
        super();
        this.name = "BitnobServerError"; 
        this.code = 500
        this.message = JSON.stringify({code: this.code, message: errorMessage})  
    }
}

class BitnobUnauthorizedError extends Error {
    constructor(errorMessage) {
        super(); 
        this.name = "BitnobUnauthorizedError"; 
        this.code = 401
        this.message = JSON.stringify({code: this.code, message: errorMessage})
    }
}

class BitnobQueryError extends Error {
    constructor(errorMessage) {
        super(); 
        this.name = "BitnobQueryError"; 
        this.code = 404
        this.message = JSON.stringify({code: this.code, message: errorMessage})
    }
}

class BitnobRateLimitError extends Error {
    constructor(errorMessage) {
        super(); 
        this.name = "BitnobRateLimitError"; 
        this.code = 429
        this.message = JSON.stringify({code: this.code, message: errorMessage})
    }
}

class BitnobBadRequestError extends Error {
    constructor(errorMessage) {
        super(); 
        this.name = "BitnobBadRequestError"; 
        this.code = 400
        this.message = JSON.stringify({code: this.code, message: errorMessage})
    }
}

module.exports = {
    BitnobBadKeyError, 
    BitnobRequiredParamError, 
    BitnobServerError, 
    BitnobUnauthorizedError, 
    BitnobQueryError, 
    BitnobRateLimitError, 
    BitnobBadRequestError,
}