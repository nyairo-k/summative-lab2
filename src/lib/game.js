const questions = [
  {
    question: "What does CLI stand for?",
    choices: [
      "Command Line Interface",
      "Common Language Interpreter",
      "Computer Logic Input",
      "Central Line Interface"
    ],
    correctAnswer: "Command Line Interface"
  },
  {
    question: "Which JavaScript keyword is used to handle asynchronous operations?",
    choices: [
      "await",
      "async",
      "setTimeout",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    question: "Which data structure is best for storing a list of trivia questions?",
    choices: [
      "Object",
      "Array",
      "String",
      "Number"
    ],
    correctAnswer: "Array"
  }
]

let score = 0
let currentQuestionIndex = 0


export async function startGame() {
  console.log("Welcome to the CLI Trivia Game!")
  score = 0
  currentQuestionIndex = 0

  await askQuestion()
}

import { select } from '@inquirer/prompts'
import chalk from 'chalk'

async function askQuestion() {
  if (currentQuestionIndex >= questions.length) {
    return endGame()
  }

  const currentQuestion = questions[currentQuestionIndex]

  const answer = await select({
    message: currentQuestion.question,
    choices: currentQuestion.choices.map(choice => ({ name: choice, value: choice }))
  })

  if (checkAnswer(answer, currentQuestion.correctAnswer)) {
  console.log(chalk.green("Correct!"))
  score++
} else {
  console.log(chalk.red(`Incorrect! The correct answer was: ${currentQuestion.correctAnswer}`))
}


  currentQuestionIndex++
  await askQuestion()
}

export function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer === correctAnswer
}


import process from 'process'  // Node.js built-in

function endGame() {
  console.log(chalk.blue("\nGame Over!"))
  console.log(`Your final score is: ${score} out of ${questions.length}\n`)
  process.exit(0)
}
