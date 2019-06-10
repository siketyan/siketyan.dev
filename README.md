# siketyan.dev
[![CircleCI](https://circleci.com/gh/Siketyan/siketyan.dev.svg?style=svg)](https://circleci.com/gh/Siketyan/siketyan.dev)

My portfolio website.

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
