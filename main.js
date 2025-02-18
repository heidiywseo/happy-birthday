
window.onload = () => {
  document.body.classList.remove("not-loaded");

  // Select the flowers
  const flower3 = document.querySelector(".flower--3");
  const flower1 = document.querySelector(".flower--1");
  const flower2 = document.querySelector(".flower--2");

  // Select the containers
  const letterContainer = document.getElementById("letter-container");
  const photoContainer = document.getElementById("photo-container");

  const audioContainer = document.getElementById("audio-container");
  //const audioElement = document.getElementById("birthday-audio");
  //const nextSongButton = document.getElementById("next-song");

  // Function to toggle visibility
  function toggleVisibility(element) {
      element.classList.toggle("hidden");
      element.style.opacity = element.classList.contains("hidden") ? "0" : "1";
  }

  // Click event for Flower 2 (Middle Flower - Show Letter)
  flower1.addEventListener("click", (event) => {
      toggleVisibility(letterContainer);
      event.stopPropagation(); // Prevents click from immediately closing it
  });

  // Click event for Flower 1 (Left Flower - Show Photo)
  flower3.addEventListener("click", (event) => {
      toggleVisibility(photoContainer);
      event.stopPropagation();
  });

  // Flower 2 Click - Play Music
  let songIndex = 0;
  const songs = [
      "HappyTrails.mp3",
      "HappyTrails.mp3",
      "HappyTrails.mp3",
      "HappyTrails.mp3",
      "HappyTrails.mp3"
  ];

  flower2.addEventListener("click", (event) => {
    toggleVisibility(audioContainer);
        event.stopPropagation();
    });

    /*
  flower2.addEventListener("click", (event) => {
    toggleVisibility(audioContainer);
    if (!audioContainer.classList.contains("hidden")) {
        audioElement.src = songs[songIndex]; // Load the first song
        audioElement.play();
    } else {
        audioElement.pause();
    }
    event.stopPropagation();
  });
  */

  // Next Song Button Click - Change Song
  /*
  nextSongButton.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length; // Loop through songs
    audioElement.src = songs[songIndex];
    audioElement.play();
  });
  */


  // Click anywhere outside to close pop-ups
  document.addEventListener("click", (event) => {
      if (!letterContainer.classList.contains("hidden") && !letterContainer.contains(event.target)) {
          toggleVisibility(letterContainer);
      }
      if (!photoContainer.classList.contains("hidden") && !photoContainer.contains(event.target)) {
          toggleVisibility(photoContainer);
      }
      if (!audioContainer.classList.contains("hidden") && !audioContainer.contains(event.target)) {
        toggleVisibility(audioContainer);
        //audioElement.pause(); 
      }
  });
};

