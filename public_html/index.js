// let e = document.getElementById('images');

// window.onload = (e) => {
//     try {
//         fetch('/images/')
//             .then(response => response.json())
//             .then(data => {
//                 data.forEach(image => {
//                     const i = document.createElement('img');
//                     i.src = '/images/' + image;
//                     e.appendChild(i);

//                 });
//             })
//     }
//     catch (error) { console.error(error) };

//dreamscape.com/dream?id=75



// }


const init = () => {

    const container = document.getElementById('images');

    fetch('/getListImages')
        .then(res => res.json())
        .then(data => {
            data.forEach(filename => {
                //show image
                const img = document.createElement('img');
                img.src = `/images/${filename}`;
                container.appendChild(img);

                // //generate QR code for image link
                // const qr = document.createElement('img');
                // const url = `https://dreamscape.cad.rit.edu/dream?id = ${filename}`;
                // qr.src = `https://api/qrserver.com/v1/create-qr-code/?data = ${encodeURIComponent(url)}&size=100x100`;
                // container.appendChild(qr);
            });

        })

        .catch(err => console.error(err));
};





window.onload = init;

/*
two Get
    - one gets list of names of images 
    - one gets one image when given name
one post
-   post to upload

encodeqr html for qr sicne two ? might break
*/

