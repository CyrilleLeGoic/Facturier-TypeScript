export class Print {
    constructor(element) {
        this.element = element;
    }
    print() {
        document.body.innerHTML = this.element.innerHTML;
        window.print();
        document.location.reload();
    }
}
