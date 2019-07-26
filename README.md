<p align="center">
  <img src="src/assets/master.svg" alt="Icon" width="128" height="128">
</p>

<h1 align="center">siketyan.dev</h1>

<p align="center">
  <a href="https://circleci.com/gh/Siketyan/siketyan.dev">
    <img src="https://circleci.com/gh/Siketyan/siketyan.dev.svg?style=svg" alt="CircleCI">
  </a>
  <a href="https://dev.azure.com/siketyan-org/siketyan.dev/_build/latest?definitionId=1&branchName=master">
    <img src="https://dev.azure.com/siketyan-org/siketyan.dev/_apis/build/status/Siketyan.siketyan.dev?branchName=master" alt="Azure Pipelines">
  </a>
  <a href="https://ci.sikeserver.com/viewType.html?buildTypeId=SiketyanDev_Build">
    <img src="https://ci.sikeserver.com/app/rest/builds/buildType:SiketyanDev_Build/statusIcon" alt="TeamCity">
  </a>
  <a href="https://travis-ci.com/Siketyan/siketyan.dev">
    <img src="https://travis-ci.com/Siketyan/siketyan.dev.svg?branch=master" alt="Travis CI">
  </a>
</p>

<p align="center">
  My portfolio website.
</p>

<br>

## Requirements
- Node.js 11.x
- Gulp.js CLI
- Firebase CLI (Optional on Deploy)

## Installation
1. Clone this repository.
2. Run `yarn install` or `npm install` to resolve dependencies.
3. Run `yarn build` or `npm run build` to build assets with Gulp.js.
4. Copy the contents in `dist` directory to the document root.

## Deployment via Firebase Hosting
```sh
$ firebase deploy --project [PROJECT_ID] --token [FIREBASE_TOKEN]
```

## License
This program is released under the **MIT License**.
For details, refer [LICENSE.md](LICENSE.md).
