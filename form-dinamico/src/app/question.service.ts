import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { RadioQuestion } from './question-radio';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        required: true,
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 4,
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        type: 'name',
        value: 'Bombasto',
        required: true,
        order: 1,
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2,
      }),

      // new TextboxQuestion({
      //     key: 'planet',
      //     label: 'Planet',
      //     type: 'planet',
      //     order: 3,
      //   }),
      // ];

      new RadioQuestion({
        key: 'planet',
        label: 'Planet',
        required: true,
        order: 3,
        controlType: 'radio',
        type: 'radio', // Se necessário, dependendo da implementação
        options: [
          { key: 'terra66', value: 'Terra 66' },
          { key: 'mercurio74', value: 'Mercurio 74' },
          { key: 'other', value: 'Other' },
        ],
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
