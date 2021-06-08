export default function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.currentIndex = 0;
}

//[q1,q2,q3,q4]--> cuurrent index is changing 
Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentIndex];
}
//increament question by 1
Quiz.prototype.nextIndex = function() {
  this.currentIndex++;
}
//to check if quiz ended or not
Quiz.prototype.hasEnded = function() {
  return this.currentIndex === this.questions.length;
}
//guessing the answer of  current question
Quiz.prototype.guess = function(userGuess) {
  const currentQuestion = this.questions[this.currentIndex];
  if (currentQuestion.isCorrect(userGuess)) {
    this.score++;
  }
  this.nextIndex();
}
//reset the quiz
Quiz.prototype.reset = function() {
  this.score = 0;
  this.currentIndex = 0;
}



