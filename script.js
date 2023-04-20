const userProfile = document.querySelector('.userProfile');
const settingMenu = document.querySelector('.settingMenu');
const darkBtn = document.querySelector('.darkBtn');
userProfile.addEventListener('click', () => {
    settingMenu.classList.toggle('settingMenuHeight');
});

darkBtn.onclick = function () {
    darkBtn.classList.toggle('darkbtnOn');
    document.body.classList.toggle('darkTheme');
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove('darkbtnOn');
    document.body.classList.remove('darkTheme');
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add('darkbtnOn');
    document.body.classList.add('darkTheme');
} else {
    localStorage.setItem("theme", "light");
}