let dbCourses = [];
if (localStorage.db && JSON.parse(localStorage.db).length > 0) {
  dbCourses = JSON.parse(localStorage.db);
} else {
  dbCourses = [
    {
      id: 1,
      title: "Java Script",
      level: "Beginner",
      duration: 100,
      instructor: "Nikola Jokic",
      price: 150,
      icon: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg",
    },
    {
      id: 2,
      title: "CSS 3",
      level: "Intermediate",
      duration: 150,
      instructor: "Bogdan Bogdanovic",
      price: 300,
      icon: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/css3/css3-original.svg",
    },
    {
      id: 3,
      title: "Java Script",
      level: "Advanced",
      duration: 100,
      instructor: "Petar Petrovic",
      price: 500,
      icon: "pictures/javascript-original.svg",
    },
    {
      id: 4,
      title: "ReactJS",
      level: "Beginner",
      duration: 80,
      instructor: "Branimir Stulic",
      price: 200,
      icon: "pictures/react-original.svg",
    },
    {
      id: 5,
      title: "PHP",
      level: "Beginner",
      duration: 110,
      instructor: "Kawhi Leonard",
      price: 200,
      icon: "pictures/php-original.svg",
    },
    {
      id: 6,
      title: "Laravel",
      level: "Beginner",
      duration: 300,
      instructor: "Jimmy Butler",
      price: 500,
      icon: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/laravel/laravel-original.svg",
    },
  ];
}
