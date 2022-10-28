let menuBtn = document.querySelectorAll(".link-menu");

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", (e) => {
    let dv = e.currentTarget.parentNode;
    dv.classList.toggle("active");

    menuBtn[i].addEventListener("blur", (e) => {
      let dv = e.currentTarget.parentNode;
      dv.classList.remove("active");
    });
  });
}

// let headerHeight = headerWrap.offsetHeight;

const headerArea = document.querySelector(".header-area");
const headerWrap = document.querySelector(".header-wrap");
const dayHeader = document.querySelector(".day-header-wrap");

let headerMoving = (direction) => {
  let currentScrollValue = document.documentElement.scrollTop; //스크롤 위치 구하기
  console.log("currentScrollValue is " + currentScrollValue); //스크롤 위치 콘솔에 출력
  if (direction === "up") {
    headerArea.classList.remove("hidden");
    headerUp();
  } else if (direction === "down") {
    if (currentScrollValue > 100) {
      headerWrap.style.borderBottom = "1px solid #eee";
      headerDown();
    }
  }
};

function headerDown() {
  let currentScrollValue = document.documentElement.scrollTop; //스크롤 위치 구하기
  console.log("currentScrollValue is " + currentScrollValue); //스크롤 위치 콘솔에 출력
  if (currentScrollValue > 222) {
    dayHeader.classList.remove("hidden");
    headerArea.classList.add("hidden");
  }
}

function headerUp() {
  let currentScrollValue = document.documentElement.scrollTop; //스크롤 위치 구하기
  console.log("currentScrollValue is " + currentScrollValue); //스크롤 위치 콘솔에 출력
  if (currentScrollValue < 111) {
    headerArea.style.borderBottom = "none";
    dayHeader.classList.add("hidden");
  }
}

let prevScrollTop = 0;

window.onscroll = () => {
  let nextScrollTop = window.pageYOffset || 0; // pageYOffset -> IE 8 이하 빼고 다 됨.
  if (nextScrollTop > prevScrollTop) {
    headerMoving("down");
  } else if (nextScrollTop < prevScrollTop) {
    headerMoving("up");
  }
  prevScrollTop = nextScrollTop;
};
