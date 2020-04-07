const request = require('sync-request');

const getContributors = (repoOwner, repoName) => {

  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;


}


const contributors = getContributors('lighthouse-labs','tweeter');

