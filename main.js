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

let titleInput = document.querySelector("#title-input-add");
let levelInput = document.querySelector("#level-input-add");
let durationInput = document.querySelector("#duration-input-add");
let instructorInput = document.querySelector("#instructor-input-add");
let priceInput = document.querySelector("#price-input-add");
let iconInput = document.querySelector("#icon-input-add");

let coursesContainer = coursesView.querySelector(".container");
let editDeleteContainer = editDeleteView.querySelector(".container");

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
  createCourses();
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
  createEditDeleteCards();
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
    id: dbCourses.length > 0 ? dbCourses[dbCourses.length - 1].id + 1 : 1, // id novog kursa za 1 veci od id-ja zadnjeg
    title: titleInput.value,
    level: levelInput.value,
    duration: durationInput.value,
    instructor: instructorInput.value,
    price: priceInput.value,
    icon: iconInput.value + `?${Math.random()}`, // sprjecava kesiranje
  };
  dbCourses[dbCourses.length] = newCourse;
  resetInputs();
  createCourses();
}

function deleteCourse(e) {
  if (e) {
    e.preventDefault();
  }
  dbCourses.splice(this.dataset.id, 1);
  createCourses();
  displayCoursesView();
}

// end event listeners

displayCoursesView();

function createCourses() {
  let html = "";
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
  // displayCoursesView();
}

function createEditDeleteCards() {
  let html = "";
  dbCourses.forEach((course, index) => {
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
            <div class="row-btns">
              <button data-id="${index}" class="btn btn-edit">Edit</button>
              <button data-id="${index}" class="btn btn-delete">Delete</button>
            </div>
          </div>`.trim();
  });
  editDeleteContainer.innerHTML = html;

  let btnDeleteAll = editDeleteContainer.querySelectorAll(".btn-delete");
  let btnEditAll = editDeleteContainer.querySelectorAll(".btn-edit");
  btnDeleteAll.forEach((btnDelete, index) => {
    btnDelete.addEventListener("click", deleteCourse);
    btnEditAll[index].addEventListener("click", showCourse);
  });
}

function showCourse(){
  console.log(dbCourses[this.dataset.id].id)
  // alert(`Radi dugme edit na kursu  ${dbCourses[this.dataset.id].name} `);
}

function resetInputs() {
  titleInput.value = "";
  levelInput.value = "";
  durationInput.value = "";
  instructorInput.value = "";
  priceInput.value = "";
  iconInput.value = "";
}
