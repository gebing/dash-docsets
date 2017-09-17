function replaceNextPrevArrows() {
    var spanElement;
    var elements = document.getElementsByClassName('navprev');
    if ( elements.length == 2 ) {
        var navPrevElement = elements[1];
        var prevLink = navPrevElement.children[0];
        var prevText = prevLink.getAttribute('title');
        spanElement = document.createElement("span");
        spanElement.setAttribute('class', 'bottom_navigation_text');
        spanElement.innerHTML = prevText;
        prevLink.appendChild(spanElement);
    }
    elements = document.getElementsByClassName('navnext');
    if ( elements.length == 2 ) {
        var navNextElement = elements[1];
        var nextLink = navNextElement.children[0];
        var nextText = nextLink.getAttribute('title');
        spanElement = document.createElement("span");
        spanElement.setAttribute('class', 'bottom_navigation_text');
        spanElement.innerHTML = nextText;
        nextLink.appendChild(spanElement);
    }
}
