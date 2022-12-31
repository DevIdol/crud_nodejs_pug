"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler = (err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something Wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
    });
};
exports.default = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map