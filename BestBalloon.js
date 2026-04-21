// Wrap everything in this to stop the "null" errors
document.addEventListener("DOMContentLoaded", () => {
    
    // Select elements
    const nextBtn = document.querySelector("#next-btn");
    const zoomBtn = document.querySelector("#zoom-btn");
    const book = document.querySelector("#book");
    const paper1 = document.querySelector("#p1");
    const paper2 = document.querySelector("#p2");
    const paper3 = document.querySelector("#p3");

    
    if (nextBtn) {
        nextBtn.addEventListener("click", goNextPage);
    }

    let currentLocation = 1;
    let numOfPapers = 3;
    let maxLocation = numOfPapers;

    function openBook() {
        book.style.transform = "translateX(50%)";
        nextBtn.style.transform = "translateX(180px)";
    }

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

    // Audio Logic
    const clickSound = new Audio('./swoosh.mp3');

    document.addEventListener('click', (event) => {
        if (event.target.closest('#zoom-btn')) {
            event.preventDefault();
            const link = event.target.closest('#zoom-btn');
            
            clickSound.play();
            // clickSound.onended = () => {
            //     window.location.href = link.href;
            // };
            

            setTimeout(() => {
        window.location.href = link.href;
    }, 600);
        }
    });
});


// Book Flip
// const nextBtn = document.querySelector("#next-btn");
// const zoomBtn = document.querySelector("#zoom-btn");
// const book = document.querySelector("#book");

// const paper1 = document.querySelector("#p1");
// const paper2 = document.querySelector("#p2");
// const paper3 = document.querySelector("#p3");

// // Event Listener
// nextBtn.addEventListener("click", goNextPage);

// // Business Logic
// let currentLocation = 1;
// let numOfPapers = 3;
// let maxLocation = numOfPapers;

// function openBook() {
//   book.style.transform = "translateX(50%)";
//   nextBtn.style.transform = "translateX(180px)";
// }

// function goNextPage() {
//   if (currentLocation > maxLocation) return;

//   switch (currentLocation) {
//     case 1:
//       openBook();
//       paper1.classList.add("flipped");

//       setTimeout(() => {
//         paper1.style.zIndex = 1;
//       }, 250);
//       break;

//     case 2:
//       paper2.classList.add("flipped");

//       setTimeout(() => {
//         paper2.style.zIndex = 2;

//         // 🔥 SHOW BUTTON AFTER SECOND FLIP
//         nextBtn.style.display = "none";
//         zoomBtn.style.display = "inline-block";
//       }, 250);
//       break;
//   }

//   currentLocation++;
// }

// // Remove next page button after flipping page
// function removeBtn() {
//   // nextBtn.disabled = true;
//   // nextBtn.remove();
//   nextBtn.style.display = "none";
//   zoomBtn.style.display = "inline-block";
// }

// $("#zoom").on("click", function() {
//     $("#zoomTarget").zoomTo();
// });

// $("#zoom").on("click", function () {
//     $("#book").zoomTo({
//         duration: 800,
//         easing: "ease-in-out"
//     });
// });

// console.log($.fn.zoomTo);


// const clickSound = new Audio('./swoosh.mp3');

// document.addEventListener('click', (event) => {
//     if (event.target.classList.contains('zoom-btn')) {
//         event.preventDefault();
//         const link = event.target;
        
//         clickSound.play();
//         clickSound.onended = () => {
//             window.location.href = link.href;
//         };
//     }
// });


// document.querySelector('#zoom-btn').style.display = 'block'; 