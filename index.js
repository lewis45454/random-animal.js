const axios = require("axios")

async function randomCat() {
    return new Promise(function(resolve, reject) {
        axios.get(`https://some-random-api.ml/img/cat`).then(cat => {
            resolve(cat.data.link)
        })
    })
}

module.exports = {
    randomCat: randomCat
}