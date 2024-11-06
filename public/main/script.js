function setupCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(button => {
      button.addEventListener('click', () => {
        const code = button.previousElementSibling.textContent;
        navigator.clipboard.writeText(code);
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {

    setupCopyButtons();
    document.getElementById('testButton')?.addEventListener('click', testAPI);
    document.getElementById('refreshQuotes')?.addEventListener('click', loadQuotes);
  });