const { from, interval, of, timer } = require('rxjs');
const { filter, map, delay, takeWhile, concatMap } = require('rxjs/operators');




const fs = require('fs');
// Lê o arquivo JSON
const jsonString = fs.readFileSync('ships.json', 'utf8');

const ships = JSON.parse(jsonString)

timer(0, 2000)
.pipe(takeWhile(val => val < ships.tracking.length), concatMap(val => of(ships.tracking[val])))
.subscribe(console.log)
