import { Question } from "./question.js";

export class FillInBlank extends Question {
  constructor(type, id, content, answer) {
    super(type, id, content, answer);
  }
  render(index) {
    return `
    <div>
      <p class="lead font-italic" style="font-size: 30px">Câu ${index}: ${this.content} </p>
      <input type = 'text' class = 'form-control w-50' id = '${this.id}'/>
    </div>
      `;
  }
  checkExact() {
    let value = document.getElementById(`${this.id}`).value;
    value = value.toLowerCase();
    if (value === this.answer[0].content.toLowerCase()) return true;
    return false;
  }
}
