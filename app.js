const express = require("express");
const ytdl = require("ytdl-core");
const app = express();

app.get("/", function (req, res) {
  const { url } = req.query;
  //   const date = Date.now();
  let name;
  ytdl.getInfo(url).then((info) => {
    let id = info.videoDetails.title;
    // console.log(id);
    res.header("Content-Disposition", `attachment; filename="${id}.mp4"`);
    return ytdl(url).pipe(res);
  });
});

app.listen(3000);
