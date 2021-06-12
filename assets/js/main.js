import { MultipleChoice } from "../../models/multipleChoice.js";
import { FillInBlank } from "../../models/fillInBlank.js";

let questionList = [];
let mark = 0;
const fetchQuestion = async () => {
  try {
    const res = await axios({
      url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
      method: "get",
    });
    return res.data;
  } catch (error) {}
};

const mapList = (data = []) => {
  questionList = data.map((item) => {
    const { questionType, id, content, answers } = item;

    if (questionType === 1) {
      return new MultipleChoice(questionType, id, content, answers);
    }
    return new FillInBlank(questionType, id, content, answers);
  });
};

const renderQuestion = () => {
  let htmlContent = "";
  for (let i in questionList) {
    htmlContent += questionList[i].render(+i + 1);
  }

  document.querySelector("#listQ").innerHTML = htmlContent;
};

// Show List Question
fetchQuestion().then((data) => {
  mapList(data);
  renderQuestion();
});

// check answer

window.submit = () => {
  let result = 0;
  for (let item of questionList) {
    if (item.checkExact()) result++;
  }
  alert("Ket qua: " + result + "/" + questionList.length + "cau");
};
