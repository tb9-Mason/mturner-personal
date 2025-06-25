const pa11y = require('pa11y');

const checks = [
  { url: 'localhost:3000', options: { actions: ['click element .theme-toggle'] } },
  { url: 'localhost:3000/projects', options: { actions: [] } },
  { url: 'localhost:3000/contact', options: { actions: [] } },
];

(async () => {
  for (const check of checks) {
    console.log(`\nChecking ${check.url}`);
    const results = await pa11y(check.url, { chromeLaunchConfig: { args: ['--no-sandbox'] } });

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
        chromeLaunchConfig: { args: ['--no-sandbox'] },
        ...check.options,
      });

      if (actionResults.issues.length) {
        console.error(`Issues found on ${check.url} after actions`);
        console.error(results.issues);
        process.exitCode = 1;
      } else {
        console.log(`No issues found on ${check.url} after actions!`);
      }
    }
  }
})();
