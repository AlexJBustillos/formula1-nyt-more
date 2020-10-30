// Write code here

class Soccer {
    constructor(player, team, country) {
        this.player = player;
        this.team = team;
        this.country = country;
        this.all = function () {
            console.log(`The new player is ${this.player} and is on ${this.team} and is from ${this.country}`)
        }
    }
    
}
const myNumber = new Soccer('Alex', 'NYCFC', 'USA');
console.log(`The new player is ${myNumber.player}`);
const karim = new Soccer('Karim Benzema', 'Real Madrid', 'France');
console.log(`The new player is ${karim.player}`);
const eden = new Soccer('Eden Hazard', 'Real Madrid', 'Belgium');
console.log(`The new player is ${eden.player}`);
Soccer.prototype.all = function () {
    console.log('One more time');
}
eden.all();

const morePromises = (condition) => new Promise((result, reject) => {
    if (condition === 'Real Madrid') result('HALA MADRID')
    reject('Pick a better team')
})
morePromises(karim.team).then(console.log).catch(console.error)
morePromises().then(console.log).catch(console.error)


