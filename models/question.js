export class Question {
  constructor(type, id, content, answer) {
    this.type = type;
    this.id = id;
    this.content = content;
    this.answer = answer;
  }

  checkExact() {}
  render() {}
}
