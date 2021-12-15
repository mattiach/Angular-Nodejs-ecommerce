const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// let index = 22;

let productList = [
    { id: 1, name: 'Monopoly: Madness', genere: 'Area Game', qt: 8, price: 35.00, url: 'https://static-it.gamestop.it/images/products/306048/3max.jpg' },
    { id: 2, name: 'Battlefield 2042', genere: 'Sparatutto', qt: 20, price: 64.00, url: 'https://static-it.gamestop.it/images/products/302226/3max.jpg' },
    { id: 3, name: 'Team Sonic Racing', genere: 'Azione', qt: 12, price: 20.00, url: 'https://static-it.gamestop.it/images/products/306442/3max.jpg' },
    { id: 4, name: 'Chorus - Day One Edition', genere: 'Avventura', qt: 16, price: 45.00, url: 'https://static-it.gamestop.it/images/products/302226/3max.jpg' },
    { id: 6, name: 'Tekken 7', genere: 'Picchiaduro', qt: 40, price: 40.00, url: 'https://static-it.gamestop.it/images/products/306169/3max.jpg' },
    { id: 7, name: 'The Elder Scrolls V: Skyrim', genere: 'RPG Fantasy', qt: 30, price: 20.00, url: 'https://static-it.gamestop.it/images/products/306052/3max.jpg' },
    { id: 8, name: 'The Wild At Heart', genere: 'Avventura', qt: 4, price: 15.00, url: 'https://static-it.gamestop.it/images/products/305929/3max.jpg' },
    { id: 9, name: 'A Hat in Time', genere: 'Avventura', qt: 2, price: 12.00, url: 'https://static-it.gamestop.it/images/products/305927/3max.jpg' },
    { id: 10, name: 'Surviving The Aftermath', genere: 'Strategico', qt: 2, price: 10.00, url: 'https://static-it.gamestop.it/images/products/305888/3max.jpg' },
    { id: 11, name: 'Marsupilami: Hoobadventur', genere: 'Azione', qt: 20, price: 20.00, url: 'https://static-it.gamestop.it/images/products/305513/3max.jpg' },
    { id: 12, name: 'The Eternal Cylinder', genere: 'Survival', qt: 27, price: 35.00, url: 'https://static-it.gamestop.it/images/products/305597/3max.jpg' },
    { id: 13, name: 'Kena: Bridge of Spirits', genere: 'Avventura', qt: 22, price: 59.00, url: 'https://static-it.gamestop.it/images/products/305501/3max.jpg' },
    { id: 14, name: 'ARK', genere: 'Survival', qt: 36, price: 35.00, url: 'https://static-it.gamestop.it/images/products/305367/3max.jpg' },
    { id: 15, name: 'BLUE REFLECTION', genere: 'RPG', qt: 13, price: 18.00, url: 'https://static-it.gamestop.it/images/products/304957/3max.jpg' },
    { id: 16, name: 'Jurassic World Evolution 2', genere: 'Avventura', qt: 4, price: 20.00, url: 'https://static-it.gamestop.it/images/products/305159/3max.jpg' },
    { id: 17, name: 'NERF: Legends', genere: 'Sparatutto', qt: 2, price: 38.00, url: 'https://static-it.gamestop.it/images/products/305250/3max.jpg' },
    { id: 18, name: 'All Star Brawl', genere: 'Avventura', qt: 43, price: 59.00, url: 'https://static-it.gamestop.it/images/products/305258/3max.jpg' },
    { id: 19, name: 'MechWarrior 5: Mercenaries', genere: 'Sparatutto', qt: 7, price: 32.00, url: 'https://static-it.gamestop.it/images/products/305361/3max.jpg' },
    { id: 20, name: 'Fast & Furious', genere: 'Azione', qt: 11, price: 49.00, url: 'https://static-it.gamestop.it/images/products/304078/3max.jpg' },
    { id: 21, name: 'Little Nightmares', genere: 'Horror', qt: 1, price: 29.00, url: 'https://static-it.gamestop.it/images/products/305768/3max.jpg' },
    { id: 22, name: 'Far Cry 6', genere: 'Avventura', qt: 89, price: 79.00, url: 'https://static-it.gamestop.it/images/products/299527/3max.jpg' }
];

app.get('/product', (request, response) => {
    response.json(productList);
})

app.get('/product/:id', (request, response) => {
    response.json(productList.find(product => product.id == request.params.id));
})

app.delete('/product/:id', (request, response) => {
    productList = productList.filter(product => product.id != request.params.id);
    response.json('Prodotto eliminato con successo!!!!');
})

app.listen(3000, () => console.log('Server attivo sulla porta 3000!'))

















/* ===========================================================================

Nel caso si volessero implementare opzioni per inserire/modificare i prodotti :

app.post('/product', (request, response) => {
    const obj = request.body;
    obj.id = ++index;
    productList.push(obj);
    response.json('Prodotto inserito con successo!!!!');
})

app.put('/product/:id', (request, response) => {
    let product = productList.find(element => element.id == request.params.id);
    Object.assign(product, request.body);
    response.json('Prodotto modificato con successo!!!!');
})


============================================================================= */