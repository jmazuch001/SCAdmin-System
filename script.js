// const draggables = document.querySelectorAll(".draggable-1", ".draggable-2");
const draggables = document.querySelectorAll(".draggable-1", ".draggable-2");
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
        console.log('drag start');
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

// runs when we move our cursor
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
        console.log('drag over')
    })
})


