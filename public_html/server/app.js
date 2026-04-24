
const express = require('express');
const compression = require('compression');
const path = require('path');
const fileUpload = require('express-fileupload');
const router = require('./router.js');

const app = express();
const port = process.env.PORT || 3000;




app.use(compression());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, '../public')));
router(app);

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Listening on port ${port}`);
});

// app.use(fileUpload());

// app.post('/images', function(req, res) {
//     const file = req.files.upload;
//     const filePath = Path2D.join(__dirname, 'public', 'images', `${file.name}`)

//     file.mv(filePath, err => {
//         if (err) return res.status(500).send(err);
//         res.redirect('/');
//     })
// })

// app.listen(4000);