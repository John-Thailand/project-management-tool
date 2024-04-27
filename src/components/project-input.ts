import Cmp from './base-component.js';
import * as Validation from '../util/validation.js';
import { autobind as Autobind } from '../decorators/autobind.js';
import { projectState } from '../state/project-state.js';

// ProjectInput Class
export class ProjectInput extends Cmp<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    mandayInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');

        this.titleInputElement = this.element.querySelector(
            '#title',
        ) as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector(
            '#description',
        ) as HTMLInputElement;
        this.mandayInputElement = this.element.querySelector(
            '#manday',
        ) as HTMLInputElement;

        this.configure();
    }

    // eventListenerの追加
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent() { }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredManday = this.mandayInputElement.value;

        const titleValidatable: Validation.Validatable = {
            value: enteredTitle,
            required: true,
        }
        const descriptionValidatable: Validation.Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        }
        const mandayValidatable: Validation.Validatable = {
            value: +enteredManday,
            required: true,
            min: 1,
            max: 1000,
        }

        if (
            !Validation.validate(titleValidatable) ||
            !Validation.validate(descriptionValidatable) ||
            !Validation.validate(mandayValidatable)
        ) {
            alert('入力値が正しくありません。再度お試しください。');
            return;
        } else {
            // +を前につけることでstring型からnumber型へ変換できる
            return [enteredTitle, enteredDescription, +enteredManday];
        }
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.mandayInputElement.value = '';
    }

    @Autobind
    private submitHandler(event: Event) {
        // submitイベントの本来の動作を止める
        event.preventDefault();
        const userInput = this.gatherUserInput();
        // TuppleはArrayなのでArrayかどうか判定する
        if (Array.isArray(userInput)) {
            const [title, desc, manday] = userInput;
            projectState.addProject(title, desc, manday);
            this.clearInputs();
        }
    }
}
