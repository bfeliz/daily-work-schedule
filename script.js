var storedArray = [
    {
        time: '#nine-am',
        todo: ''
    },
    {
        time: '#ten-am',
        todo: ''
    }
];
var userText = '';

$(document).ready(function() {
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
    $('#button-nine-am').on('click', function() {
        var userText = $('#nine-am').val();
        if (userText === '') {
            return;
        }
        storedArray[0].todo = userText;
        storeUserInput();
    });

    $('#button-ten-am').on('click', function() {
        var userText = $('#ten-am').val();
        if (userText === '') {
            return;
        }
        storedArray[1].todo = userText;
        storeUserInput();
    });
    // call startup functions
    storage();
    insertStorage();
});
