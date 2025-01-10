const sidebar = document.querySelector('.sidebar')
const sidebarBtn = document.querySelector('.sidebar-toggle')
const closeSidebarBtn = document.querySelector('.close-btn')

closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar')

})

sidebarBtn.addEventListener('click', () => {
  if(sidebar.classList.contains('sidebar')){
  sidebar.classList.toggle('show-sidebar')
  }
})
