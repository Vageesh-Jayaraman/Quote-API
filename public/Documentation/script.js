function copyToClipboard(text, iconElement) {
    navigator.clipboard.writeText(text).then(() => {
        iconElement.textContent = '✅';
        iconElement.classList.add('copied');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const origin = window.location.origin;
    const endpointElements = document.querySelectorAll('.endpoint h3');

    endpointElements.forEach(element => {
        const endpointPath = element.textContent.trim();
        const fullUrl = `${origin}${endpointPath}`;
        element.textContent = fullUrl;
        element.nextElementSibling.setAttribute('onclick', `copyToClipboard('${fullUrl}', this)`);
    });
});
