const axios = require("axios").default
axios.defaults.headers.post['Content-Type'] = 'application/json';
let i, x, y;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

setInterval( () => {
    let settings = {
        "brightness": "100",
        "red": getRandomInt(255),
        "green": getRandomInt(255),
        "blue": getRandomInt(255)
    }
    axios.post("http://192.168.1.225:8123/api/webhook/testlight", settings).then(r => console.log(r))
}, 3000)







