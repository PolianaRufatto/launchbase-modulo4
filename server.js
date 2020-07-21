const express = require('express');
const nunjucks = require('nunjucks');
const routes = require("./routes");

const server = express();

server.use(express.static('public'));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

// server.get("/", function(req, res) {

//     const about = {
//         avatar_url: "https://avatars1.githubusercontent.com/u/5182966?s=460&u=ae8da8137a4e8f19a68f9df693cf409b304d5b7a&v=4",
//         name: "Poliana Rufatto",
//         role: "Automatizadora de testes - Softplan",
//         description: 'Estudante de programação, focada em front-end. Colaboradora da <a href="https://www.softplan.com.br/" target="_blank">Softplan</a>',
//         links: [
//             {
//                 name: "Github",
//                 url: "https://github.com/PolianaRufatto"
//             },
//             {
//                 name: "Linkedin",
//                 url: "https://www.linkedin.com/in/polianarufatto/"
//             },
//             {
//                 name: "Twitter",
//                 url: ""
//             },

//         ]
//     }

//     return res.render('about', {about});
// });

// server.get("/portfolio", function(req, res) {
//     return res.render('portfolio', { items: videos});
// });

// server.get("/video", function(req, res) {
//     const id = req.query.id;

//     const video = videos.find(function(video){
//         return video.id === id;
//     });

//     if (!video) {
//         return res.send("Video not found!");
//     }

//     return res.render("video", { item: video });

//     res.send(id);
// })

server.listen(5000, function() {
    console.log('server is running');
});