import finishedHtml from './finished.html';
import startHtml from './start.html';
import questionHtml from './question.html';
import footerHtml from './footer.html';

const app = angular.module('jlg-quiz', []);

app.service('jlgQuiz', function JLGQuiz() {
	this.questions = undefined;
});

app.component('jlgQuiz', {
	controller: function JLGQuizCtrl($scope, $element, $compile, jlgQuiz) {
        this.jlgQuiz = jlgQuiz;

		const START = 0;
		const QUESTION = 1;
		const END = 2;
		const templates = [startHtml, questionHtml, finishedHtml];

		this.state = START;
		this.template = templates[this.state];

		this.i = 0;
		this.answers = [];

		this.next = () => {
            console.log('next');
			if (this.state === START) {
                if (jlgQuiz.questions.length > 0) {
                    this.state = QUESTION;
                } else {
                    this.state = END;
                }
			} else if (this.state === QUESTION) {
				this.i++;
				if (this.i === jlgQuiz.questions.length) {
					this.state = END;
				}
			}
			this.render();
		};
		this.prev = () => {
            console.log('prev');
			if (this.state === END) {
                if (jlgQuiz.questions.length > 0) {
                    this.i--;
                    this.state = QUESTION;
                } else {
                    this.state = START;
                }
			} else if (this.state === QUESTION) {
				if (this.i === 0) {
					this.state = START;
				} else {
                    this.i--;
                }
			}
			this.render();
		};

		this.render = () => {
            this.template = templates[this.state];

			this.template += footerHtml;
			$element.html(this.template);
			$compile($element.contents())($scope);
		};
		this.render();

		$scope.$watch('$ctrl.answers', () => {
			this.result = 0;
			for (let i = 0; i < jlgQuiz.questions.length; i++) {
				if (jlgQuiz.questions[i].correctAnswer === this.answers[i]) {
					this.result++;
				}
			}
		}, true);
	}
});
