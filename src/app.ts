class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    mandayInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

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
        this.attach();
    }

    private submitHandler(event: Event) {
        // submitイベントの本来の動作を止める
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }

    // eventListenerの追加
    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    // 要素を追加
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();
