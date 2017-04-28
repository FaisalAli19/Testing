const express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

//Uncomment only if making a http api call from https Server
//
// app.use(function(req, res, next) {
//     if(req.headers["x-forwarded-proto"] === "https"){
//         res.redirect(`http://${req.hostname}${req.url}`);
//     }else {
//         next();
//     }
// })

app.use(express.static("App"));

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});
