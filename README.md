# dinosaur-fetcher
[![Build Status](https://travis-ci.org/aldeste/dinosaur-fetcher.svg?branch=master)](https://travis-ci.org/aldeste/dinosaur-fetcher) [![codecov](https://codecov.io/gh/aldeste/dinosaur-fetcher/branch/master/graph/badge.svg)](https://codecov.io/gh/aldeste/dinosaur-fetcher) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Fetches the absolute best dinosaurs and other dinosaurs, guaranteed!

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
