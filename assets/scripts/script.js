const tabs = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");
const bidsBtn = document.querySelectorAll(".bids-btn");
const bidsContent = document.querySelectorAll(".bids-content");
const collectionBtn = document.querySelectorAll(".collection-btn");
const settingBtn = document.querySelectorAll(".setting-btn");
const settingContent = document.querySelectorAll(".setting-content");
const collectionContent = document.querySelectorAll(".collection-content");
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
bidsBtn.forEach((bids, index) => {
  bids.addEventListener('click', () => {
    bidsBtn.forEach(bids => { bids.classList.remove('active') });
    bids.classList.add('active');

    bidsContent.forEach(bidcontent => { bidcontent.classList.remove('active') });
    bidsContent[index].classList.add('active');
  })
})
collectionBtn.forEach((collection, index) => {
  collection.addEventListener('click', () => {
    collectionBtn.forEach(collection => { collection.classList.remove('active') });
    collection.classList.add('active');

    collectionContent.forEach(collcontent => { collcontent.classList.remove('active') });
    collectionContent[index].classList.add('active');
  })
})
settingBtn.forEach((setting, index) => {
  setting.addEventListener('click', () => {
    settingBtn.forEach(setting => { setting.classList.remove('active') });
    setting.classList.add('active');

    settingContent.forEach(settcontent => { settcontent.classList.remove('active') });
    settingContent[index].classList.add('active');
  })
})