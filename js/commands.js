// Create a global accesible instance of artyom
window.artyom = new Artyom();
// A normal command

var commands = [{
    indexes: ["Hello"],
    action: function () {
        alert("Hello, how are you ?");
    }
},
{
    indexes: ["go to home"],
    action: function () {
        window.location.href = './index.html';
    }
},
{
    indexes: ["go to crowd around"],
    action: function () {
        window.location.href = './ca.html';
    }
},
{
    indexes: ["go to about you"],
    action: function () {
        window.location.href = './ay.html';
    }
},

{
    indexes: ["select parking slot"],
    action: function () {
        window.location.href = './parking.html';
    }
},

{
    indexes: ["select cab booking"],
    action: function () {
        window.location.href = './cab.html';
    }
},

{
    indexes: ["select travel request"],
    action: function () {
        window.location.href = './travel.html';
    }
},

{
    indexes: ["go to work tools"],
    action: function () {
        window.location.href = './tools.html';
    }
},
{
    indexes: ["open work tools"],
    action: function () {
        $('.dropdown').addClass('open');
    }
},
{
    indexes: ["close work tools"],
    action: function () {
        $('.dropdown').removeClass('open');
    }
},
{
    indexes: ['Read article *'],
    smart: true,
    action: (i, wildcard) => {
        if (wildcard === "up to speed") {
            var a = $('#article p').text();
            artyom.say(a);
        }
        else if (wildcard === "this is me") {
            var b = $('#two p').text();
            artyom.say(b);
        }
    }
}

];

var artyom = new Artyom();

artyom.addCommands(commands);

artyom.redirectRecognizedTextOutput(function (output, isFinal) {
    if (!isFinal) {
        $("#output-artyom").text(output);
    } else {
        $("#output-artyom").text("");
    }
});

artyom.initialize({
    lang: "en-GB", // More languages are documented in the library
    continuous: true, //if you have https connection, you can activate continuous mode
    debug: true, //Show everything in the console
    listen: true // Start listening when this function is triggered
});