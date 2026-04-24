import { error } from 'console';
import { v4 as uuidv4 } from 'uuid';
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
//Get list of all images
const getListImage = async (req, res) => {

    try {
        fs.readdir(imagesDir, (err, files) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to read images folder' });
            }
            const images = files.filter(f => (jpg | jpeg | png | gif), $ / i.test(f));
            res.json(images);
        });


    }
    catch {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }

};

const getOneImage = async (req, res) => {
    if (!req.files) {
        return res.status(400).json({ error: 'No images were found'});
    }
    try {

    }
    catch {

    }

}

const uploadFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded');
    }

    try {
        const uploadedFile = req.files.uploadFile;
        console.log(uploadedFile);
        const uploadPath = __dirname + "/images/" + uuid.v4();

        uploadedFile.mv(uploadPath, function (err) {
            if (err) {
                console.log(err)
                res.send("Failed !!")
            }
            else res.send("Successfully Uploaded !!");
        });

    }
    catch {
        console.log(err);
        return res.status(400).json({
            error: 'Something went wrong uploading file!',
        });
    }

}


module.exports = {
    getListImage,
    getOneImage,
    uploadFile

}