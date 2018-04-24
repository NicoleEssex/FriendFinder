var friendData = require('../data/friend-data.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        console.log(friendData);
        res.json(friendData);
    });

    app.post('/api/friends', function(req,res){
        var userInput = (req.body);
        console.log(userInput);
    });
}