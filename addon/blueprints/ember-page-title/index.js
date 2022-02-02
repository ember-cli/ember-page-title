'use strict';

const path = require('path');
const fs = require('fs');

module.exports = {
  normalizeEntityName() {},

  afterInstall(opts) {
    let project = opts.project;

    let isFastBootPresent = 'ember-cli-fastboot' in project.dependencies();

    if (isFastBootPresent) {
      let indexHtmlPath = project.isEmberCLIAddon()
        ? path.join(project.root, 'tests', 'dummy', 'app', 'index.html')
        : path.join(project.root, 'app', 'index.html');

      if (fs.existsSync(indexHtmlPath)) {
        const contents = fs.readFileSync(indexHtmlPath, {
          encoding: 'utf8',
        });

        const titleMatches = contents.match(/<title>\s*(.*)\s*<\/title>/i);
        const title = (titleMatches && titleMatches[1]) || 'Example Title';
        if (titleMatches) {
          fs.writeFileSync(
            indexHtmlPath,
            contents.replace(/\s*<title>\s*.*\s*<\/title>/gi, ''),
            {
              encoding: 'utf8',
            }
          );
        }
        opts.ui.writeWarnLine(
          `<title> has been removed from index.html due to ember-cli-fastboot being present, please add {{page-title "${title}"}} to application.hbs`
        );
      }
    }
  },
};
