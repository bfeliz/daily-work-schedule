const now = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(now);

let userText = "";
let storedArray = [
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
        const currentMinutes = moment().format("mm");
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

            const test = moment().format("H");
            const htmlData = $(this).attr("data-num");
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
        const storedInputs = JSON.parse(localStorage.getItem("storedArray"));
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
            const text = storedArray[i].todo;
            const timeSlot = storedArray[i].time;
            $(timeSlot).text(text);
        }
    }

    function resetList() {
        storedArray = [
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
        storeUserInput();
        storage();
        insertStorage();
    }

    // event listener for favorites clear button
    $(".clear").on("click", ".clear-btn", resetList);

    // save button calls
    $(".input-group").on("click", "button", function(event) {
        event.preventDefault();
        for (let j = 0; j < storedArray.length; j++) {
            const btnSelect = storedArray[j].time;
            const userText = $(btnSelect).val();
            storedArray[j].todo = userText;
            storeUserInput();
            insertStorage();
        }
    });

    // call startup functions
    setColors();
    storage();
    insertStorage();
});
