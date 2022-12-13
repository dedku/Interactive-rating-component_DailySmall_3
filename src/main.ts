import './style.css'

// TODO ADD TESTS

const NUMBER_ARRAY: string[] = []

function initProject(): void {
    const nodeButtons: NodeListOf<Element> = document.querySelectorAll('.rating-button')
    const buttons: Element[] = Array.from(nodeButtons)

    const submit = document.querySelector('.cta') as HTMLButtonElement

    nextStepSubmit(submit)
    addOrRemoveActiveButton(buttons)
}

function addOrRemoveActiveButton(buttonsArray: Element[]): void {
    for (const button of buttonsArray) {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) {
                button.classList.remove('active')
                removeFromArray(button.innerHTML)
            } else {
                button.classList.add('active')
                addToArray(button.innerHTML)
            }
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
    NUMBER_ARRAY.push(num)
}

function removeFromArray(num: string): void {
    const indexOfNumber = NUMBER_ARRAY.indexOf(num)

    if (!indexOfNumber) return

    NUMBER_ARRAY.splice(indexOfNumber, 1)
}

function addInnerHtmlWithArrayLength() {
    document.querySelector('.selected-rating')!.innerHTML = `
    <h5>You selected ${NUMBER_ARRAY.length} out of 5</h5>
    `
}

initProject()
