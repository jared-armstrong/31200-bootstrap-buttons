/** @format */

let questionSet = [
  { question: "What actor plays Strider in LOTR?", answer: "Viggo Mortensen" },
  { question: "What actor plays Gandalf in LOTR?", answer: "Ian McKellen" },
  {
    question: "What actor plays Samwise Gamgee in LOTR?",
    answer: "Sean Astin",
  },
];

let eowenActress = [
  "No, she plays the part of elf maiden, Arwen",
  "No, he plays the part of Strider",
  "Yes, Miranda Otta plays the lady Eowen!",
];

let questionNumber = 0;
//  for buttons in part 1
const addListener = (item) => {
  item.addEventListener("click", (e) => {
    questionNumber = e.target.attributes.num.value - 1;
    document.querySelector("#answer").textContent = "";
    document.querySelector("#question").textContent =
      questionSet[questionNumber].question;
  });
};
let questionButtons = document.querySelectorAll(".qBtn");
questionButtons.forEach(addListener);

document.querySelector("#check").addEventListener("click", (e) => {
  document.querySelector("#answer").textContent =
    questionSet[questionNumber].answer;
});

// ... for characters in shire, the buttons as check boxes
document.querySelector("#shire_characters").addEventListener("click", (e) => {
  console.log("check buttons");
  let check_buttons = document.querySelectorAll(".shire");
  let correct_buttons = document.querySelectorAll("[correct]");
  let checked_buttons = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  if (checked_buttons.length > 3) {
    document.querySelector("#correct_shire_characters").textContent =
      "Hey, you can only pick 3!";
    return false;
  }

  console.log("checked buttons", checked_buttons);
  let score = 0;
  for (let i = 0; i < correct_buttons.length; i++) {
    for (let j = 0; j < checked_buttons.length; j++)
      if (correct_buttons[i] === checked_buttons[j]) score += 1;
  }
  document.querySelector(
    "#correct_shire_characters"
  ).textContent = `You scored ${score}/3. The characters who live in the Shire are Frodo, Merry and Pippin!`;
});

// ... which actor button group
document.querySelectorAll(".which_actor").forEach((e) => {
  addEventListener("click", (e) => {
    let eowenNumber = e.target.attributes.choice.value;
    document.querySelector("#eowen").textContent = eowenActress[eowenNumber];
  });
});

document.querySelector("#which_wizard").addEventListener("click", (e) => {
  let selectedWizard = document.querySelector("input[type=radio]:checked");
  if (selectedWizard.id === "saruman")
    document.querySelector("#correct_wizard").textContent =
      "Yes, Saruman went to the bad side";
  else {
    let wizName =
      selectedWizard.id[0].toUpperCase() + selectedWizard.id.substring(1);
    document.querySelector(
      "#correct_wizard"
    ).textContent = `No, ${wizName} stayed true to wizardry, Saruman went to the bad side`;
  }
});
