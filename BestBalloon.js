// Makes sure all content is loaded before running js in order for audio to work
document.addEventListener("DOMContentLoaded", () => {

    /* Book JS */
    /* Based on Tutorial: https://www.youtube.com/watch?v=0kD6ff2J3BQ */
    // Select elements
    const nextBtn = document.querySelector("#next-btn");
    const zoomBtn = document.querySelector("#zoom-btn");
    const book = document.querySelector("#book");
    const paper1 = document.querySelector("#p1");
    const paper2 = document.querySelector("#p2");
    const paper3 = document.querySelector("#p3");

    
    // goes to next page on click
    if (nextBtn) {
        nextBtn.addEventListener("click", goNextPage);
    }

    // allows for tracking of page number so it knows when to layer and change to zoom button
    let currentLocation = 1;
    let numOfPapers = 3;
    let maxLocation = numOfPapers;

    // opens book from one page to a spread
    function openBook() {
        book.style.transform = "translateX(50%)";
        nextBtn.style.transform = "translateX(180px)";
    }

    // does the action of flipping the page and adds new button after last flip
    function goNextPage() {
        if (currentLocation > maxLocation) return;

        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                setTimeout(() => { paper1.style.zIndex = 1; }, 250);
                break;
            case 2:
                paper2.classList.add("flipped");
                setTimeout(() => {
                    paper2.style.zIndex = 2;
                    nextBtn.style.display = "none";
                    zoomBtn.style.display = "inline-block";
                }, 250);
                break;
        }
        currentLocation++;
    }

    // swoosh audio
    // plays audio for a set amount of time before link takes you to the next page
    const swooshSound = new Audio('./swoosh.mp3');

    document.addEventListener('click', (event) => {
        if (event.target.closest('#zoom-btn')) {
            event.preventDefault();
            const link = event.target.closest('#zoom-btn');
            swooshSound.play();
            setTimeout(() => {
        window.location.href = link.href;
    }, 600);
        }
    });
});


