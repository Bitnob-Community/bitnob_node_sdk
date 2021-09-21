class BitnobBadKeyError extends Error {
    constructor(message = "API Key is not set") {
        super(message); 
        this.name = "BitnobBadKeyError"; 
    }
}

class BitnobRequiredParamError extends Error {
    constructor(message:string) {
      super(message); 
      this.name = "BitnobRequiredParamError"; 
    }
}

class BitnobServerError extends Error {
    code: number;
    constructor(errorMessage:string) {
        super();
        this.name = "BitnobServerError"; 
        this.code = 500
        this.message = JSON.stringify({code: this.code, message: errorMessage})  
    }
}

class BitnobUnauthorizedError extends Error {
    code: number;
    constructor(errorMessage:string) {
        super(); 
        this.name = "BitnobUnauthorizedError"; 
        this.code = 401
        this.message = JSON.stringify({code: this.code, message: errorMessage})
    }
}

class BitnobQueryError extends Error {
    code: number;
    constructor(errorMessage:string) {
        super(); 
        this.name = "BitnobQueryError"; 
        this.code = 404
        this.message = JSON.stringify({code: this.code, message: errorMessage})
    }
}

class BitnobRateLimitError extends Error {
    code: number;
    constructor(errorMessage:string) {
        super(); 
        this.name = "BitnobRateLimitError"; 
        this.code = 429
        this.message = JSON.stringify({code: this.code, message: errorMessage})
    }
}

class BitnobBadRequestError extends Error {
    code: number;
    constructor(errorMessage:string) {
        super(); 
        this.name = "BitnobBadRequestError"; 
        this.code = 400
        this.message = JSON.stringify({code: this.code, message: errorMessage})
    }
}

export {
    BitnobBadKeyError, 
    BitnobRequiredParamError, 
    BitnobServerError, 
    BitnobUnauthorizedError, 
    BitnobQueryError, 
    BitnobRateLimitError, 
    BitnobBadRequestError,
}