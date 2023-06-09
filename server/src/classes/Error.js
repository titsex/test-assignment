export class HttpError {
    statusCode
    error
    message

    constructor(statusCode, message, error) {
        this.statusCode = statusCode
        this.error = error
        this.message = message
    }
}

export class BadRequest extends HttpError {
    constructor(message) {
        super(400, message, 'Bad Request')
    }
}

export class Unauthorized extends HttpError {
    constructor() {
        super(401, 'You have to log in', 'Unauthorized')
    }
}
