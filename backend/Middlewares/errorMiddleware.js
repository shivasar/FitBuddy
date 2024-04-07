function errorHandler(statusCode, err, req, res, next) { //next is for next middleware
    console.error(err.stack); 
    /* Error: Example error
    at Object.<anonymous> (/path/to/file.js:3:13)
    at Module._compile (internal/modules/cjs/loader.js:1156:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1176:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47
 */

    if (res.headersSent) {
        return next(err);
    }
    
    console.log("ERROR MIDDLEWARE CALLED")
    res.status(statusCode || 500).json({
        ok: false, // Set the "ok" field to false for errors
        message: err.message,
    });
}

module.exports = errorHandler;
