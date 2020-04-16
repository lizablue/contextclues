// suspect variables
var friends = ['jerry', 'elaine', 'george', 'kramer', 'newman'];
var objects = ['bubble', 'coffee table', 'sombrero', 'pez dispenser', 'puffy shirt', 'jujubees', 'pen', 'meatball sub', 'bagel', 'golf ball', 'pillow', 'glasses', 'shoe', 'chair', 'glitter', 'chinese food', 'suede jacket', 'popsicle', 'hammock', 'paint'];
var locations = ['house', 'yard', 'bar', 'gym', 'office', 'garage', 'pool', 'cave', 'attic', 'basement'];

var solve = accAlert();

function randomVal(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// create h3's to display accusations
for (var i = 1; i <= 100; i++) {
    $('.accusations').append('<h3>Accusation: ' + i + '</h3>');
}

function accAlert() {
    // assign random combination to accusation
    var friendName
    var weaponName
    var locationName
    
    return function() {
        // get random values with each click
        friendName = randomVal(friends);
        weaponName = randomVal(objects);
        locationName = randomVal(locations);
        //accusation alert
        alert(`I accuse ${friendName}, with the ${weaponName}, in the ${locationName}!`);
    }
};

$('h3').click(function() {
    console.log(solve());
})




