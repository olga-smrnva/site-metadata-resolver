const express = require("express");
const app = express();
const request = require("request");
const cors = require("cors");
const bodyParser = require("body-parser");
const urlMetadata = require('url-metadata')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// paged items route
app.get("/api/urlmeta", (req, res, next) => {
	urlMetadata(req.query.url).then(
		function (metadata) { 
			return res.json({
				data: [{ title: metadata.title, url: metadata.url, image: metadata.image }]
			});
		},
		function (error) { 
			console.log(error)
		}
	);
});

// proxy requests for front end to client app
app.use("/", function (req, res) {
	request("http://localhost:8081" + req.path)
		.on("error", (err) =>
			res.send("client not started yet, try refreshing in a few seconds")
		)
		.pipe(res);
});

// start server
const port = 8080;
app.listen(port, () => console.log("Server listening on port " + port));
