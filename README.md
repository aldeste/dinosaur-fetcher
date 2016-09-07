# dinosaur-fetcher
[![Build Status](https://travis-ci.org/aldeste/dinosaur-fetcher.svg?branch=master)](https://travis-ci.org/aldeste/dinosaur-fetcher)

Fetches the absolute best dinosaurs and other dinosaurs

## How?
```javascript
const dino = include('dinosaur-fetcher');

const dinosaur = dino.random() // Ningyuansaurus
const dinosaurs = dino.random(3) // ['Lycorhinus', 'Dinotyrannus', 'Megacervixosaurus']
```
You can also get an array of every dinosaur.
```javascript
const dino = include('dinoraus-fetcher');
const dinosaurs = dino.all
```

## Why?
Because dinosaurs are great.
