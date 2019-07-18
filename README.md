This repo is the source and builds for aseroff's personal portfolio site. Note that the master branch is `source`, as github.io will only host the `master` branch.

## Development

`npm start` to start server

## Deployment

### https://andy.seroff.co

1. `git checkout source`
1. `npm update`
1. `npm run build && aws s3 sync build/ s3://andy.seroff.co`
1. invalidate cloudfront

### https://aseroff.github.io

1. `git checkout pages`
1. `git merge source`
1. `npm update`
1. `npm run build`
1. `npm run deploy`
1. `git checkout master`
1. `git merge gh-pages`
1. `git push`