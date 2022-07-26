const Park = function (name, price){
    this.name = name;
    this.price = price;
    this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dino) {
    this.dinosaurs.push(dino);
};

Park.prototype.removeDinosaur = function(dino) {
    let indexNo = this.dinosaurs.indexOf(dino);
    this.dinosaurs.splice(indexNo, 1)
};

Park.prototype.attractsTheMost = function(park) {
    let attract = this.dinosaurs.guestsAttractedPerDay.sort((a,b) => a-b)
    return attract[0].species
};

Park.prototype.dinosaursOfASpecies = function(dinospecies) {
    const speciesList = [];
    for (const spec of this.park.dinosaurs.species) {
        if (spec == dinospecies) {
            speciesList.unshift(spec)
        }
    return speciesList
    }
}

Park.prototype.totalVisitorsDay = function() {
    let totalVisit = 0;
    for (var dino of this.dinosaurs)
        totalVisit += dino.guestsAttractedPerDay
    return totalVisit
}

Park.prototype.totalVisitorsYear = function() {
    let totalDayVisit = this.totalVisitorsDay();
    return totalDayVisit * 365;
}

Park.prototype.totalRevenuePerYear = function() {
    let totalVisitorsYear = this.totalVisitorsYear();
    return totalVisitorsYear * this.price;
}

module.exports = Park;

