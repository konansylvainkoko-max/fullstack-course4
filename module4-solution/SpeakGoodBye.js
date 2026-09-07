(function () {

  var byeSpeaker = {};

  var speakWord = "Good Bye";

  function speak(name) {
    console.log(speakWord + " " + name);
  }

  byeSpeaker.speak = speak;

  window.byeSpeaker = byeSpeaker;

})();
