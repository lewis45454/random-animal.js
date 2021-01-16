const axios = require("axios")

async function randomCat() {
    return new Promise(function(resolve, reject) {
        axios.get(`https://some-random-api.ml/img/cat`).then(cat => {
            resolve(cat.data.link)
        }).catch(err => reject(err))
    })
}

async function randomDog() {
    return new Promise(function(resolve, reject) {
        axios.get(`https://some-random-api.ml/img/dog`).then(dog => {
            resolve(dog.data.link)
        }).catch(err => reject(err))
    })
}

async function randomKoala() {
    return new Promise(function(resolve, reject) {
        axios.get(`https://some-random-api.ml/img/koala`).then(koala => {
            resolve(koala.data.link)
        }).catch(err => reject(err))
    })
}

async function randomPanda() {
    return new Promise(function(resolve, reject) {
        axios.get(`https://some-random-api.ml/img/panda`).then(panda => {
            resolve(panda.data.link)
        }).catch(err => reject(err))
    })
}

async function randomRedPanda() {
    return new Promise(function(resolve, reject) {
        axios.get(`https://some-random-api.ml/img/red_panda`).then(redPanda => {
            resolve(redPanda.data.link)
        }).catch(err => reject(err))
    })
}

async function randomFox() {
    return new Promise(function(resolve, reject) {
        axios.get(`https://some-random-api.ml/img/fox`).then(fox => {
            resolve(fox.data.link)
        }).catch(err => reject(err))
    })
}

async function randomBird() {
    return new Promise(function(resolve, reject) {
        axios.get(`https://some-random-api.ml/img/birb`).then(bird => {
            resolve(bird.data.link)
        }).catch(err => reject(err))
    })
}

module.exports = {
    randomCat: randomCat,
    randomDog: randomDog,
    randomKoala: randomKoala,
    randomPanda: randomPanda,
    randomRedPanda: randomRedPanda,
    randomFox: randomFox,
    randomBird: randomBird
}