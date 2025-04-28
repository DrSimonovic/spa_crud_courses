let coursesContainer = document.querySelector(".container");

// views

let coursesView = document.querySelector("#courses-view");
let addView = document.querySelector("#add-view");
let editDeleteView = document.querySelector("#edit-delete-view");
let linksView = document.querySelector("#links-view");

// btns

let btnCourses = document.querySelector(".btn-courses");
let btnAdd = document.querySelector(".btn-add");
let btnEditDelete = document.querySelector(".btn-edit-delete");
let btnLinks = document.querySelector(".btn-links");
let btnSaveInput = document.querySelector(".btn-save");

// inputs

let titleInput = document.getElementsByName("title")[0];
let levelInput = document.getElementsByName("level")[0];
let durationInput = document.getElementsByName("duration")[0];
let instructorInput = document.getElementsByName("instructor")[0];
let priceInput = document.getElementsByName("price")[0];
let iconInput = document.getElementsByName("icon")[0];

// listeners

btnCourses.addEventListener("click", displayCoursesView);
btnAdd.addEventListener("click", displayAddView);
btnEditDelete.addEventListener("click", displayEditDeleteView);
btnLinks.addEventListener("click", displayLinksView);
btnSaveInput.addEventListener("click", createNewCourse);

window.addEventListener("beforeunload", (e) => {
  localStorage.db = JSON.stringify(dbCourses);
});

// event handlers

function displayCoursesView(e) {
  if (e) {
    e.preventDefault();
  }
  addView.style.display = "none";
  editDeleteView.style.display = "none";
  linksView.style.display = "none";
  coursesView.style.display = "block";
}

function displayAddView(e) {
  if (e) {
    e.preventDefault();
  }
  coursesView.style.display = "none";
  editDeleteView.style.display = "none";
  linksView.style.display = "none";
  addView.style.display = "block";
}

function displayEditDeleteView(e) {
  if (e) {
    e.preventDefault();
  }
  coursesView.style.display = "none";
  addView.style.display = "none";
  linksView.style.display = "none";
  editDeleteView.style.display = "block";
}

function displayLinksView(e) {
  if (e) {
    e.preventDefault();
  }
  coursesView.style.display = "none";
  addView.style.display = "none";
  editDeleteView.style.display = "none";
  linksView.style.display = "block";
}

function createNewCourse(e) {
  if (e) {
    e.preventDefault();
  }
  let newCourse = {
    title: titleInput.value,
    level: levelInput.value,
    duration: durationInput.value,
    instructor: instructorInput.value,
    price: priceInput.value,
    icon: iconInput.value,
  };
  dbCourses[dbCourses.length] = newCourse;
  resetInputs();
  createCourses();
}

// end event listeners

createCourses();

function createCourses() {
  html = "";
  dbCourses.forEach((course) => {
    html += `<div class="card">
            <div class="row">
              <div class="level">${course.level}</div>
              <div class="duration">${course.duration} hours</div>
            </div>
            <img
              src="${course.icon}"
              alt=""
            />
            <div class="title">${course.title}</div>
            <div class="instructor">${course.instructor}</div>
            <div class="price">${course.price} EUR</div>
          </div>`.trim();
  });
  coursesContainer.innerHTML = html;
  displayCoursesView();
  // dbCourses.splice(dbCourses.length-1, 1);
  console.log(dbCourses);
}

function resetInputs() {
  titleInput.value = "";
  levelInput.value = "";
  durationInput.value = "";
  instructorInput.value = "";
  priceInput.value = "";
  iconInput.value = "";
}
