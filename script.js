function openTab(evt, tabName) {
    var i, tabContent, tabButton;

    // Hide all tab content
    tabContent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }

    // Deactivate all tab buttons
    tabButton = document.getElementsByClassName('tab-button');
    for (i = 0; i < tabButton.length; i++) {
      tabButton[i].classList.remove('active');
    }

    // Show the selected tab content and mark the button as active
    document.documentElement.scrollTop = 0;
    document.getElementById(tabName).style.display = 'block';
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
