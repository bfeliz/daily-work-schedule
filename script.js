var storedArray = [
    {
        time: '#nine-am',
        todo: ''
    },
    {
        time: '#ten-am',
        todo: ''
    },
    {
        time: '#eleven-am',
        todo: ''
    },
    {
        time: '#twelve-pm',
        todo: ''
    },
    {
        time: '#one-pm',
        todo: ''
    },
    {
        time: '#two-pm',
        todo: ''
    },
    {
        time: '#three-pm',
        todo: ''
    },
    {
        time: '#four-pm',
        todo: ''
    },
    {
        time: '#five-pm',
        todo: ''
    }
];

var userText = '';

// $(document).ready(function() {
// local storage functions
function storage() {
    var storedInputs = JSON.parse(localStorage.getItem('storedArray'));
    if (storedInputs !== null) {
        storedArray = storedInputs;
    }
}

function storeUserInput() {
    localStorage.setItem('storedArray', JSON.stringify(storedArray));
}

// show stored user input in text fields
function insertStorage() {
    for (let i = 0; i < storedArray.length; i++) {
        var text = storedArray[i].todo;
        var timeSlot = storedArray[i].time;
        $(timeSlot).attr('placeholder', text);
    }
}
// save button calls
$('.input-group').on('click', 'button', function(event) {
    console.log(storedArray);
    event.preventDefault();
    for (let j = 0; j < storedArray.length; j++) {
        var btnSelect = storedArray[j].time;
        var btnId = this.id;
        if ($('btnId:contains(btnSelect)')) {
            var userText = $(btnSelect).val();
            if (userText !== '') {
                storedArray[j].todo = userText;
                storeUserInput();
                insertStorage();
            }
        }
    }
});

// call startup functions
storage();
insertStorage();
// });
