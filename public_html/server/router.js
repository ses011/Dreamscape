const controllers = require('./controllers/files.js');

const router = (app) => {

    app.post('/upload', controllers.uploadFile);
    app.get('/getImages', controllers.getListImage);
    app.get('/getOneImage', controllers.getOneImage);


}

module.exports = router;