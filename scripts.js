// suspect variables
var friends = ['jerry', 'elaine', 'george', 'kramer', 'newman'];
var objects = ['bubble', 'coffee table', 'sombrero', 'pez dispenser', 'puffy shirt', 'jujubees', 'pen', 'meatball sub', 'bagel', 'golf ball', 'pillow', 'glasses', 'shoe', 'chair', 'glitter', 'chinese food', 'suede jacket', 'popsicle', 'hammock', 'paint'];
var locations = ['house', 'yard', 'bar', 'gym', 'office', 'garage', 'pool', 'cave', 'attic', 'basement'];

var solve = accAlert();

// create h3's to display accusations
for (var i = 1; i <= 100; i++) {
    $('.accusations').append('<h3>Accusation: ' + i + '</h3>');
}

function accAlert() {
    // assign random combination to accusation
    var friendName
    var weaponName
    var locationName

    return function () {

        $('h3').click(function () {
            // get random values with each click
            i++;
            friendName = friends[i % friends.length];
            weaponName = objects[i % objects.length];
            locationName = locations[i % locations.length];

            //accusation alert
            alert(`I accuse ${friendName}, with the ${weaponName}, in the ${locationName}!`);
        })

    }

};

solve();




