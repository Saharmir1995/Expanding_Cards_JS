// const activeMode = (panel) => {
//     removeActiveClasses();
//     panel.classList.add('active')
// }

// const removeActiveClasses = (panel) => {
//     panel.classList.remove('active')
// }

// const init = () => {
//   document.querySelectorAll(".panel")
//   .forEach(panel => addEventListener("click", activeMode))
// };
// init();


const panels = document.querySelectorAll('panel');

panels.forEach(panel => {
    panel.addEventListener('click' , () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
