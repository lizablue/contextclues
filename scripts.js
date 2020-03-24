
// create h3's to display accusations
function addAcc() {
    var i = 0;
    function countAcc() {
        if (i < 100) {
            $('div').append('<h3>Accusation ' + i + '</h3>');
            i++;
        };
    }; countAcc();
    
};
addAcc();

var friends = ['lily', 'marshall', , 'robin', 'ted', 'barney'];
var locations = ['house', 'patio', 'bar', 'roof', 'office', 'garage', 'pool', 'cave', 'attic', 'basement'];
var objects = ['balloon', 'playdoh', 'sharpie', 'robot', 'notebook', 'eraser', 'hat', 'coffee mug', 'lamp', 'earring', 'pillow', 'blanket', 'shoe', 'chair', 'mirror', 'glitter', 'jacket', 'popsicle', 'hammock', 'tissues'];
