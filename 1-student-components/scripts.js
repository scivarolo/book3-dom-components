const students = [{
    name: "Chris Miller",
    class: "History",
    info: "Failed last exam",
    score: 59
  },
  {
    name: "Courtney Seward",
    class: "History",
    info: "Has completed all homework",
    score: 91
  },
  {
    name: "Garrett Ward",
    class: "History",
    info: "Wonderful at helping other students",
    score: 88
  },
  {
    name: "John Dulaney",
    class: "History",
    info: "Has never missed a class or exam",
    score: 92
  },
  {
    name: "Greg Lawrence",
    class: "History",
    info: "Sub-par performance all around",
    score: 64
  },
  {
    name: "Leah Duvic",
    class: "History",
    info: "Wonderful student",
    score: 97
  },
  {
    name: "Jesse Page",
    class: "History",
    info: "Smokes too much. Distracting.",
    score: 76
  },
  {
    name: "Kevin Haggerty",
    class: "History",
    info: "Falls asleep in class",
    score: 79
  },
  {
    name: "Max Wolf",
    class: "History",
    info: "Talks too much",
    score: 83
  },
  {
    name: "Lissa Goforth",
    class: "History",
    info: "Asks pointless, unrelated questions",
    score: 78
  },
  {
    name: "Tyler Bowman",
    class: "History",
    info: "When was the last time he attended class?",
    score: 48
  },
  {
    name: "Ray Medrano",
    class: "History",
    info: "Needs to contribute to in-class discussions",
    score: 95
  }
]


const container = document.querySelector("#container");

const HTMLelement = (element, content, style) => `<${element} class="${style}">${content}</${element}>`; 

const student = (name, clazz, info, status) => `
  <div class="student">
    ${HTMLelement("h1", name, status)}
    ${HTMLelement("section", clazz, "bordered dashed")}
    ${HTMLelement("aside", info)}
  </div>
`;
for (currentStudent of students) {
  let studentComponent = "";

  if (currentStudent.score >= 60) {
    studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "passing");
  } else {
    studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "failing");
  }
  container.innerHTML += studentComponent;
}