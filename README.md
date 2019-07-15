### Deployed at
1. https://andy.seroff.co

### Development
1. `npm start` to start server

### Deployment
1. `npm run build && aws s3 sync build/ s3://andy.seroff.co`
1. invalidate cloudfront