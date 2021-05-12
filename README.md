# nulogy.design

Documentation site for https://github.com/nulogy/design-system. 

## Development

* run `yarn start`. This will start a local server at http://localhost:8000. 
* to easily create new component pages run `yarn plop NewComponentName`. Replace the with the new component name and this should generate a new page you can edit.

## Deploying
* The site will deploy through a Github Action on every merge to master. 
* To manually deploy, run `yarn build && yarn deploy`. This will copy the `/public`/ folder to the `gh-pages` branch. 
