# What is this?

Get pictures of random animals and use them where you need. Just one function and you have an image.

# Installation

`npm install random-animal.js`

Getting a random picture of a cat  
REMEMBER: All the functions are async

```
const randomAnimal = require("random-animal.js")
// or
import randomAnimal from 'random-animal.js'

randomAnimal.randomCat().then(cat => {
    console.log(cat)
})

```

## All functions

You can get random images of:  
Dog  
Cat  
Koala  
Panda  
Red panda  
Fox  
Bird  