let stateOfToggle = "closed";

const openAll = () => {
  const answers = getAllAnswers();
  answers.forEach((answer) => {
    answer.style.maxHeight = "initial";
  });
};

const closeAll = () => {};

buttonToggleAll.onclick = () => {
  if (stateOfToggle === "closed") {
    //open all
    openAll();
  } else if (stateOfToggle == "opened") {
    closeAll();
  }
};
