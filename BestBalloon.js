// Book Flip
const nextBtn = document.querySelector("#next-btn");
const zoomBtn = document.querySelector("#zoom-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers;

function openBook(){
    book.style.transform = "translateX(50%)";
    nextBtn.style.transform = "translateX(180px)";

}

function goNextPage() {
  if (currentLocation > maxLocation) return;

  switch (currentLocation) {
    case 1:
      openBook();
      paper1.classList.add("flipped");

      setTimeout(() => {
        paper1.style.zIndex = 1;
      }, 250);
      break;

    case 2:
      paper2.classList.add("flipped");

      setTimeout(() => {
        paper2.style.zIndex = 2;

        // 🔥 SHOW BUTTON AFTER SECOND FLIP
        nextBtn.style.display = "none";
        zoomBtn.style.display = "inline-block";
      }, 250);
      break;
  }

  currentLocation++;
}

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
//       }, 250);
//       break;

//     case 3:
//       paper3.classList.add("flipped");

//       setTimeout(() => {
//         paper3.style.zIndex = 3;
//         removeBtn();
//       }, 500);
//       console.log("case 3 reached");
//     removeBtn();
//       break;

    
//   }

//   currentLocation++;
// }

// Remove next page button after flipping page
function removeBtn(){
    // nextBtn.disabled = true;
    // nextBtn.remove();
    nextBtn.style.display = "none";
    zoomBtn.style.display = 'inline-block';
}
