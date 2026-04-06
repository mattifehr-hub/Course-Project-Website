// Book Flip
const nextBtn = document.querySelector("#next-btn");
const zoomBtn = document.querySelector("#zoom-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");

// Event Listener
nextBtn.addEventListener("click", goNextPage);
nextBtn.addEventListener("click", removeBtn)

// Business Logic
let currentLocation = 1;
let numOfPapers = 2;
let maxLocation = numOfPapers;

function openBook(){
    book.style.transform = "translateX(50%)";
    nextBtn.style.transform = "translateX(180px)";

}

function goNextPage(){
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zindex = 1;
                zoomBtn.style.display = 'block';
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }

}

// Remove next page button after flipping page
function removeBtn(){
    nextBtn.disabled = true;
    nextBtn.remove();
    zoomBtn.style.display = 'inline';
}
