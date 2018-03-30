$(document).ready(function() {

    console.log("Hello!")

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAdKvCDt7waNKUjvnxsDPOw0kaF_rjbTqo",
        authDomain: "fir-train-fc877.firebaseapp.com",
        databaseURL: "https://fir-train-fc877.firebaseio.com",
        projectId: "fir-train-fc877",
        storageBucket: "fir-train-fc877.appspot.com",
        messagingSenderId: "754658335762"
    };
  
    firebase.initializeApp(config);

    //VARIABLES
    //---------------------------------------------------------------

    var database = firebase.database();
    
    //Submit Event
    $("#submitTrain").on("click", function (event) {
        event.preventDefault();

        var trainName = $("#train_name").val().trim();
        var trainDestination = $("#destination").val().trim();
        var trainTime = $("#train_time").val().trim();
        var trainFrequency = $("#frequency").val().trim();

        var newTrain = {
            name: trainName,
            destination:trainDestination,
            time: trainTime,
            frequency: trainFrequency 
        };

        database.ref().push(newTrain);

        console.log(newTrain.name);
        console.log(newTrain.destination);
        console.log(newTrain.time);
        console.log(newTrain.frequency);

        $("#train_name").val("");
        $("#destination").val("");
        $("#train_time").val("");
        $("#frequency").val("");
    })





    //FUNCTIONS + EVENTS
    //---------------------------------------------------------------
    //MAIN PROCESS
    //---------------------------------------------------------------



















})
