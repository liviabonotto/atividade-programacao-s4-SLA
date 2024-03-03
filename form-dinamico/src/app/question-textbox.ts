import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}

//Presents a question and lets users enter input.
// The TextboxQuestion control type is represented in a form template using an <input> element. The type attribute of the element is defined based on the type field specified in the options argument (for example text, email, url).