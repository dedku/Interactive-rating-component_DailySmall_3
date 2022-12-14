import './style.css'

// TODO ADD TESTS

let NUMBER_ARRAY: number = 0

function initProject(): void {
    const nodeButtons = document.querySelectorAll('.rating-button') as NodeListOf<Element>
    const buttons = Array.from(nodeButtons) as HTMLDivElement[]

    const submit = document.querySelector('.cta') as HTMLButtonElement

    nextStepSubmit(submit)
    addOrRemoveActiveButton(buttons)
}

function addOrRemoveActiveButton(buttonsArray: HTMLDivElement[]): void {
    for (const button of buttonsArray) {
        button.addEventListener('click', () => {
            buttonsArray.forEach(btn => {
                btn.classList.remove('active')
                removeFromArray()
            })
            button.classList.add('active')
            addToArray(button.innerHTML)
        })
    }
}

function nextStepSubmit(subElement: HTMLButtonElement): void {
    const questionContainer = document.querySelector('.content-question') as HTMLDivElement
    const thanksContainer = document.querySelector('.content-thanks') as HTMLDivElement

    subElement.addEventListener('click', () => {
        questionContainer?.classList.add('disable')
        thanksContainer?.classList.remove('disable')
        addInnerHtmlWithArrayLength()
    })
}

function addToArray(num: string): void {
    NUMBER_ARRAY = Number(num)
}

function removeFromArray(): void {
    NUMBER_ARRAY = 0
}

function addInnerHtmlWithArrayLength() {
    document.querySelector('.selected-rating')!.innerHTML = `
    <h5>You selected ${NUMBER_ARRAY} out of 5</h5>
    `
}

initProject()
