import '../styles/main.css'

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll()
  initFAQAccordion()
  initMobileMenu()
})

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
}

function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item')
  
  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button')
    const content = item.querySelector('.faq-content')
    
    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('open')
      
      faqItems.forEach(i => {
        i.classList.remove('open')
        i.querySelector('.faq-content').style.maxHeight = null
      })
      
      if (!isOpen) {
        item.classList.add('open')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })
}

function initMobileMenu() {
  const menuButton = document.querySelector('.mobile-menu-button')
  const mobileMenu = document.querySelector('.mobile-menu')
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })
    
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden')
      })
    })
  }
}
