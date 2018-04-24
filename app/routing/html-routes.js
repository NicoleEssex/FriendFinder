var path = require ('path');

module.exports = function (app) {

    //if the address includes /survey I want the app to show the user the survey.html file.
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html')); 
    });
    
    //if the address includes /home I want the app to show the user the home.html file.
    app.get('/home', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //if the address has not been specified I want the app to show the user the home.html file.
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

}