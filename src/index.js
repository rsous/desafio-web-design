import '../styles/index.css'
import '@fortawesome/fontawesome-free/js/all'
import '@fortawesome/fontawesome-free/css/fontawesome.css'

window.addEventListener('load', function(event) {
  document.querySelector('.call-to-action').addEventListener('click', 
    openModal(document.querySelector('.modal'), document.querySelector('.body-blackout'))
  )
})

function openModal(modal, blackout) {
  return () => {
    modal.classList.add('visible')
    blackout.classList.add('visible')

    blackout.onclick = closeModal(modal, blackout)
  }
}

function closeModal(modal, blackout) {
  return () => {
    modal.classList.remove('visible')
    blackout.classList.remove('visible')
  }
}