const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const { url } = req.query;
  ytdl.getInfo(url).then((info) => {
    let name = info.videoDetails.title;
    let thumbnail = info.videoDetails.thumbnail.thumbnails[4].url;
    res.render("index.ejs", { name, thumbnail });
    // res.header("Content-Disposition", `attachment; filename="${name}.mp4"`);
    // return ytdl(url).pipe(res);
  });
});

app.listen(3000);
