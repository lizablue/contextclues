// suspect variables
var friends = ['jerry', 'elaine', , 'george', 'kramer', 'newman'];
var objects = ['bubble', 'coffee table', 'sombrero', 'pez dispenser', 'puffy shirt', 'jujubees', 'pen', 'meatball sub', 'bagel', 'golf ball', 'pillow', 'blanket', 'shoe', 'chair', 'glitter', 'chinese food', 'suede jacket', 'popsicle', 'hammock', 'paint'];
var locations = ['house', 'yard', 'bar', 'gym', 'office', 'garage', 'pool', 'cave', 'attic', 'basement'];

// create h3's to display accusations
for (var x = 1; x <= 100; x++) {
    $('.accusations').append('<h3>Accusation ' + x + '</h3>');
}

$('h3').on('click', function () {
    // assign random combination to accusation
    var friendName = friends[Math.floor(Math.random() * friends.length)];
    var weaponName = objects[Math.floor(Math.random() * objects.length)];
    var locationName = locations[Math.floor(Math.random() * locations.length)];
    function accAlert() {
        alert(`I accuse ${friendName}, with the ${weaponName}, in the ${locationName}!`);
    }
    accAlert();
})

