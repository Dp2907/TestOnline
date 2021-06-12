import { Question } from "./question.js";

export class MultipleChoice extends Question {
  constructor(type, id, content, answer) {
    super(type, id, content, answer);
  }

  render(index) {
    let answerHTML = "";
    for (let item of this.answer)
      answerHTML += `
      <div>
        <input value = '${item.id}' type = 'radio' name = '${this.id}' class = 'answer-${this.id}'>
        <label class = 'lead'>${item.content}</label>
      </div>
    `;

    return `
    <div>
    <p class="lead font-italic" style="font-size: 30px">Câu ${this.id}: ${this.content} </p>
    ${answerHTML}
    </div>`;
  }
  checkExact() {
    const inputList = document.getElementsByClassName(`answer-${this.id}`);
    let answerID;
    for (let input of inputList) {
      if (input.checked) {
        answerID = input.value;
      }
    }

    if (!answerID) return false;

    for (let item of this.answer) {
      if (answerID === item.id) {
        return item.exact;
      }
    }
    return false;
  }
}
