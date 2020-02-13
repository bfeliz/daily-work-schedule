var now = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(now);

var userText = "";
var storedArray = [
    {
        time: "#nine-am",
        todo: ""
    },
    {
        time: "#ten-am",
        todo: ""
    },
    {
        time: "#eleven-am",
        todo: ""
    },
    {
        time: "#twelve-pm",
        todo: ""
    },
    {
        time: "#one-pm",
        todo: ""
    },
    {
        time: "#two-pm",
        todo: ""
    },
    {
        time: "#three-pm",
        todo: ""
    },
    {
        time: "#four-pm",
        todo: ""
    },
    {
        time: "#five-pm",
        todo: ""
    }
];

$(document).ready(function() {
    // color coding function, set to check for need for change every minute
    setInterval(function() {
        var currentMinutes = moment().format("mm");
        if (currentMinutes === "00") {
            setColors();
        }
    }, 60 * 1000);

    function setColors() {
        $("textarea").each(function() {
            $(this)
                .removeClass("present")
                .removeClass("past")
                .removeClass("future");

            var test = moment().format("H");
            var htmlData = $(this).attr("data-num");
            if (test === htmlData) {
                $(this).addClass("present");
            } else if (+test > +htmlData) {
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            }
        });
    }

    // local storage functions
    function storage() {
        var storedInputs = JSON.parse(localStorage.getItem("storedArray"));
        if (storedInputs !== null) {
            storedArray = storedInputs;
        }
    }

    function storeUserInput() {
        localStorage.setItem("storedArray", JSON.stringify(storedArray));
    }

    // show stored user input in text fields
    function insertStorage() {
        for (let i = 0; i < storedArray.length; i++) {
            var text = storedArray[i].todo;
            var timeSlot = storedArray[i].time;
            $(timeSlot).text(text);
        }
    }
    // save button calls
    $(".input-group").on("click", "button", function(event) {
        event.preventDefault();
        for (let j = 0; j < storedArray.length; j++) {
            var btnSelect = storedArray[j].time;
            var userText = $(btnSelect).val();
            if (userText !== "") {
                storedArray[j].todo = userText;
                storeUserInput();
                insertStorage();
            }
        }
    });

    // call startup functions
    setColors();
    storage();
    insertStorage();
});
