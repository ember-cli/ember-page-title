// Testem appends progress to the title...
// and there's no way to stop this at the moment

function getPageTitle(doc) {
  // In Fastboot context we get 2 title elements if we don't remove one from app/index.html
  // In real world applications, it is mandatory to remove <title> from app/index.html
  // We are keeping both for sake for testing browser and fastboot scenarios
  const element = [...(doc || window.document).querySelectorAll('head title')].pop();
  if (element instanceof HTMLTitleElement) {
    return element.innerText.trim().replace(/^\(\d+\/\d+\)/, '');
  }
  return '';
}

export { getPageTitle };
//# sourceMappingURL=index.js.map
