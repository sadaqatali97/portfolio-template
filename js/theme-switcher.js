let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
setTheme('light');
} else {
setTheme(style);
}

for (let i of switches) {
i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
});
}

function setTheme(theme) {
    if (theme == 'default') {
        document.getElementById('switcher-id').href = '';
    } else if (theme == 'yellow') {
        document.getElementById('switcher-id').href = './css/yellow.css';
    } else if (theme == 'pink') {
        document.getElementById('switcher-id').href = './css/pink.css';
    } else if (theme == 'green') {
        document.getElementById('switcher-id').href = './css/green.css';
    } else if (theme == 'lightgreen') {
        document.getElementById('switcher-id').href = './css/lightgreen.css';
    } else if (theme == 'blue') {
        document.getElementById('switcher-id').href = './css/blue.css';
    } else if (theme == 'orange') {
        document.getElementById('switcher-id').href = './css/orange.css';
    } else if (theme == 'sky') {
        document.getElementById('switcher-id').href = './css/sky.css';
    } else if (theme == 'purple') {
        document.getElementById('switcher-id').href = './css/purple.css';
    } else if (theme == 'crimson') {
        document.getElementById('switcher-id').href = './css/crimson.css';
    } else if (theme == 'olive') {
        document.getElementById('switcher-id').href = './css/olive.css';
    }
    localStorage.setItem('style', theme);
}


$(document).ready(function(){
    $(".switcher__toggleBtn").click(function(){
        $(".theme__switches").toggleClass("show");
    });
});