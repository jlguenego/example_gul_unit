import { questions } from './question.js';
import '../modules/jlg-quiz/jlg-quiz.module';

const app = angular.module('main', ['jlg-quiz']);

app.run((jlgQuiz) => {
	console.log('questions', questions);
	jlgQuiz.questions = questions;
});
