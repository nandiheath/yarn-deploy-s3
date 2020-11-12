# yarn-deploy-s3

A simple example on how to setup a repo with github actions that can build and deploy your app to s3

This example will trigger a github action that run the build script `build.js` and output a html file at `./build/index.html` to mock the actual JAM stack build process.
And after building the files it will then deploy the file to s3.

## Setup

setup the following secrets on repository settings page

```bash
AWS_S3_BUCKET:
AWS_ACCESS_KEY_ID:
AWS_SECRET_ACCESS_KEY:
AWS_REGION:
```

For those who want to use this example, just copy the `.github` folder and modify the build script/branch.