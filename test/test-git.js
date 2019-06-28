const Octokit = require('@octokit/rest')
const octokit = new Octokit();

octokit.repos.listForOrg({
    org: 'sanarea',
    type: 'public'
  }).then(({ data }) => {
    console.log(data);
  });




// (async () => {
    
// })();