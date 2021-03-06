const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

// // Serve static assets in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//     app.use(express.static("client/build"));

//     app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client",  "build", "index.html"))
//     );
// }

// Upload Endpoint
app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if (err) {
        console.error(err);
        return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
    });


// app.use(express.static(path.join(__dirname, 'build')));


// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });



// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

    app.listen(5000, () => console.log('Server Started...'));