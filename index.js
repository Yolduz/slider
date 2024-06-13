const entities = [
    {
        title: "Rostov-on-Don, Admiral",
        city: "Rostov-on-Don </br> LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request",
        image: "./images/image 1.jpg"
    },
    {
        title: "Sochi Thieves",
        city: "Sochi </br> Thieves",
        area: "105 m2",
        time: "4 months",
        cost: "Upon request",
        image: "./images/image 2.jpg"
    },
    {
        title: "Rostov-on-Don Patriotic",
        city: "Rostov-on-Don  </br> Patriotic",
        area: "93 m2",
        time: "3 months",
        cost: "Upon request",
        image: "./images/image 3.jpg"
    }

]

const city = document.querySelector(".city .content-block-item-text");
const area = document.querySelector(".area .content-block-item-text");
const time = document.querySelector(".time .content-block-item-text");
const cost = document.querySelector(".cost .content-block-item-text");
const image = document.querySelector(".project-image-img");
const dotsParent = document.querySelector(".content-buttons-dots");
const titlesParent = document.querySelector(".project-titles");
const prev = document.querySelector(".arrow-prev");
const next = document.querySelector(".arrow-next");

let currentIndex = 0;

function initSliderElements() {
    entities.forEach((card, index) => {
        dotsParent.innerHTML += `<div class="content-buttons-dots-item" data-index=${index} ${index === 0 ?  'id="active-dot"' : ''}></div>`;
        titlesParent.innerHTML += `<li class="project-titles-item" data-index=${index} ${index === 0 ?  'id="active-title"' : ''}>${card.title}</li>`;
    })
    addUnderline();
}

initSliderElements();

function changeSlide() {
    image.setAttribute("src", `${entities[currentIndex].image}`);
    city.innerHTML = entities[currentIndex].city;
    area.innerHTML= entities[currentIndex].area;
    time.innerHTML= entities[currentIndex].time;
    image.innerHTML= entities[currentIndex].image;
}
function addUnderline() {
    const activeTitle = document.querySelector("#active-title")
    activeTitle.innerHTML += `<div class="project-titles-underline"></div>`;
    document.querySelector(".project-titles-underline").style.width = activeTitle.clientWidth + "px";
}
function removeUnderline() {
    document.querySelector(".project-titles-underline").remove();
}

function highlightElements() {
    dotsParent.querySelector("#active-dot").removeAttribute("id", "active-dot");
    dotsParent.querySelector(`.content-buttons-dots-item[data-index="${currentIndex}"]`).setAttribute("id", "active-dot");
    removeUnderline();
    titlesParent.querySelector("#active-title").removeAttribute("id");
    titlesParent.querySelector(`.project-titles-item[data-index="${currentIndex}"]`).setAttribute("id", "active-title");
    addUnderline();
}

function setNextIndex() {
    currentIndex === entities.length - 1 ? currentIndex = 0 : currentIndex += 1;
}

function setPrevIndex() {
    currentIndex === 0 ? currentIndex = entities.length - 1 : currentIndex -= 1;
}


prev.addEventListener("click", () => {
    setPrevIndex();
    changeSlide();
    highlightElements(); 
    console.log(currentIndex);

})
next.addEventListener("click", () => {
    setNextIndex();
    changeSlide();
    highlightElements()
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("content-buttons-dots-item") || e.target.classList.contains("project-titles-item")) {
        currentIndex = +e.target.dataset.index;
        changeSlide();
        highlightElements()
    }
});


