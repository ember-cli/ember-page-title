/**
 * This is here just for dummy app.
 *
 * Without it we would hit assertion from service:page-title-list
 * because of our app/index.html has 2 <title> elements due to Fastboot.
 *
 * But having 2 <title> elements is intentional so we can acceptance test both
 * browser and Fastboot scenarios together.
 */
export function initialize(/* application */) {
  if (typeof FastBoot === 'undefined') {
    let titleElements = document.head.getElementsByTagName('title');
    let defaultTitle = titleElements.item(0);
    if (defaultTitle && titleElements.length > 1) {
      defaultTitle.parentElement.removeChild(defaultTitle);
    }
  }
}

export default {
  initialize
};
