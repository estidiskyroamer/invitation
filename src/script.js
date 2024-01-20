function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function scrollToAnchor(url) {
    var targetElement = document.getElementById(url);
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

window.onload = function() {
    // Get the 'u' parameter from the URL
    var uParameter = getParameterByName('u');

    // Update the header with the parameter value
    if (uParameter) {
        console.log(uParameter);
        document.getElementById('invitee-name').innerText = uParameter;
    }
}