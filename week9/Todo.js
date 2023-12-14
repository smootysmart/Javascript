class Todo {
  constructor(id, description) {
    this.id = id;
    this.description = description;
  }
  getTodo() {
    return { id: this.id, description: this.description };
  }
  setDescription(newDesciption) {
    newDesciption = this.description;
  }
}

module.exports = Todo