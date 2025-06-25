const pa11y = require('pa11y');

const DEFAULT_PA11Y_OPTIONS = { chromeLaunchConfig: { args: ['--no-sandbox'] } };
const DEFAULT_PAGE_ACTIONS = ['click element .theme-toggle'];

const checks = [
  { url: 'localhost:3000', options: { actions: DEFAULT_PAGE_ACTIONS } },
  { url: 'localhost:3000/projects', options: { actions: DEFAULT_PAGE_ACTIONS } },
  { url: 'localhost:3000/contact', options: { actions: DEFAULT_PAGE_ACTIONS } },
];

(async () => {
  for (const check of checks) {
    console.log(`\nChecking ${check.url}`);
    const results = await pa11y(check.url, DEFAULT_PA11Y_OPTIONS);

    if (results.issues.length) {
      console.error(`Issues found on ${check.url}`);
      console.error(results.issues);
      process.exitCode = 1;
    } else {
      console.log(`No issues found on ${check.url}!`);
    }

    if (check.options.actions.length) {
      console.log(`${check.url} has ${check.options.actions.length} actions, checking...`);
      const actionResults = await pa11y(check.url, {
        ...DEFAULT_PA11Y_OPTIONS,
        ...check.options,
      });

      if (actionResults.issues.length) {
        console.error(`Issues found on ${check.url} after actions`);
        console.error(actionResults.issues);
        process.exitCode = 1;
      } else {
        console.log(`No issues found on ${check.url} after actions!`);
      }
    }
  }
})();
