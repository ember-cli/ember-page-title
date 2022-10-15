// Testem appends progress to the title...
// and there's no way to stop this at the moment

export function getPageTitle(doc?: Document) {
  // In Fastboot context we get 2 title elements if we don't remove one from app/index.html
  // In real world applications, it is mandatory to remove <title> from app/index.html
  // We are keeping both for sake for testing browser and fastboot scenarios
  const element: HTMLTitleElement | undefined = [
    ...(doc || window.document).querySelectorAll<HTMLTitleElement>(
      'head title'
    ),
  ].pop();

  return element && element.innerText.trim().replace(/^\(\d+\/\d+\)/, '');
}
