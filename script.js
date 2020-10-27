const tabLinks = document.getElementsByClassName('tablinks')
for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('mousedown', openTab)
}

function openTab(evt) {
    if (!evt) return
    let tabID = document.getElementById(evt.target.id)
    // Declare all variables
    var i, tabcontent, tablinks

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName('tabcontent')
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName('tablinks')
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '')
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabID.dataset.key).style.display = 'block'
    evt.currentTarget.className += ' active'
}
let style = window.getComputedStyle( document.getElementById('metros'))
let iframes = [...document.querySelectorAll('iframe')]
iframes.forEach(x => x.style.width = style.getPropertyValue('width'))