import { QuestionBase } from './question-base';


interface RadioQuestionOptions {
  value?: string; // Tornando opcional se necessário
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type?: string; // Tornando opcional se não for crucial para RadioQuestion
  options: { key: string; value: string }[];
}

export class RadioQuestion extends QuestionBase<string> {
  override controlType = 'radio';

  constructor(options: RadioQuestionOptions) {
    // Removido o default = {} para garantir que os parâmetros necessários sejam fornecidos
    super(options);
    this.options = options.options;
  }
}
