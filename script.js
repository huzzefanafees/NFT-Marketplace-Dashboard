const tabs = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");
const theme1 = document.querySelector(".theme1");
const theme2 = document.querySelector(".theme2");
const themeIcon = document.querySelectorAll(".theme-toggler");

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => { tab.classList.remove('active') });
    tab.classList.add('active');

    content.forEach(content => { content.classList.remove('active') });
    content[index].classList.add('active');
    window.scrollTo(0, 0);
  })
})
theme1.addEventListener('click', () => {
  document.body.classList.toggle("dark-theme-variables");
  theme1.classList.remove('active');
  theme2.classList.add('active');
  theme2.classList.add('black');
})
theme2.addEventListener('click', () => {
  document.body.classList.toggle("dark-theme-variables");
  theme2.classList.remove('active')
  theme1.classList.add('active')
})