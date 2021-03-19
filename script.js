function openEmailClient(){
    window.open('mailto:sibsabu@gmail.com')
}

function toggleMode() {
    let mode = getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-color');
    if(mode === 'whitesmoke') {
        document.documentElement.style.setProperty('--bg-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'white');
    } else {
        document.documentElement.style.setProperty('--bg-color', 'whitesmoke');
        document.documentElement.style.setProperty('--text-color', 'black');
    }
}