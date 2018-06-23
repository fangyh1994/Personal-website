var router = require("express").Router();
var formidable = require("formidable");
var post_db = require("./model.js");
var response_result = require("./response_result.js");
router.post("/post", function(req, res, next) {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        //fields 
        let name = fields.name;
        let msg = fields.msg;
        let email = fields.email;

        post_db.insertOnePost(
            {
                name : name,
                msg : msg,
                email : email,
                date : new Date()
            },
            function(err, result) {
                if (err) {
                    res.end(JSON.stringify(response_result(1, err.message)));
                    return;
                } 

                res.end(JSON.stringify(response_result(1, result)));
            }
        );

    })
});



exports.routes = function(app) {
    app.use("/visitor", router);
}