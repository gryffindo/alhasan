const express = require("express");
const morgan = require("morgan");
const data = require('./data.json')
const app = express();

app.use(express.static("public"));
app.use("/scripts", express.static(__dirname + "public/"));
app.use("/img", express.static(__dirname + "public/styles"));
app.use("/styles", express.static(__dirname + "public/styles"));

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/css", express.static(__dirname + "views/styles/"));


// Article Pages Routes
app.use('/article/2', (req, res) => {
	let article2 = data.article2

	res.render("pages/article/2", {
		article2
	})
})

app.use("/article/1", (req, res) => {
	let article1 = data.article1

	res.render("pages/article/1", {
		article1
	})
})
app.use("/article/2", (req, res) => {
	res.render("pages/article/2")
})
// Routes
app.use("/awards", (req, res) => {
  res.render("pages/awards");
});
app.use("/portfolio", (req, res) => {
  res.render("pages/portfolio");
});
app.use("/article", (req, res) => {

		// article data
		let article1 = data.article1
		let article2 = data.article2
  res.render("pages/article", {
		article1,
		article2
	});
});



app.use("/", (req, res) => {


  res.render("pages/main");
});




const PORT = process.env.PORT || 3031;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
