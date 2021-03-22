function openEmailClient() {
    window.open('mailto:sibsabu@gmail.com');
}

function toggleNightMode() {
    let mode = getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-colour');
    console.log(mode);

    if(mode === 'whitesmoke') {
        document.documentElement.style.setProperty('--bg-colour', 'black');
        document.documentElement.style.setProperty('--text-colour', 'white');
    } else {
        document.documentElement.style.setProperty('--bg-colour', 'whitesmoke');
        document.documentElement.style.setProperty('--text-colour', 'black');
    }
}
