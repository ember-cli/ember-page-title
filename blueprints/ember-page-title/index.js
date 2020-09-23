'use strict';

const path = require('path');
const fs = require('fs');

module.exports = {
  normalizeEntityName() {},

  afterInstall(opts) {
    let project = opts.project;

    let isFastBootPresent = 'ember-cli-fastboot' in project.dependencies();

    if (isFastBootPresent) {
      let isAddon = 'ember-addon' in project.pkg;

      let indexHtmlPath = isAddon ?
        path.join(project.root, 'tests', 'dummy', 'app', 'index.html') :
        path.join(project.root, 'app', 'index.html');

      if (fs.existsSync(indexHtmlPath)) {
        const contents = fs.readFileSync(
          indexHtmlPath,
          {
            encoding: 'utf8'
          }
        );

        const titleMatches = contents.match(/<title>(.*)<\/title>/i);
        const title = titleMatches[1] || "Example Title";
        fs.writeFileSync(
          indexHtmlPath,
          contents.replace(/\s.*<title>.*<\/title>.*/gi, ''),
          {
            encoding: 'utf8'
          }
        );
        opts.ui.writeWarnLine(`<title> has been removed from index.html due to ember-cli-fastboot being present, please add {{page-title "${title}"}} to application.hbs`);
      }
    }
  }
};
