nulogy.design is powered by the following technologies:

1. [Gatsby](http://gatsbyjs.com) for the website itself 
2. [react-view](https://github.com/uber/react-view) for the component playgrounds at the top of each page
3. [Plop](http://plopjs.com) for generating new component pages 
4. [MDX](https://mdxjs.com/) for writing content 
5. [Github Actions](https://github.com/features/actions) and [Github Pages](https://pages.github.com/) for deployment and hosting 

## Adding a non-component page 

1. Put a new .mdx file inside the pages directory and it will be automatically turned into a page, using the directory structure to build the url. e.g to create a page at http://nulogy.design/guides/developer-workflow/, add a file called `developer-workflow.mdx` to to `guides` folder. 

2. Add the page to `src/components/navigationLinks.js`. By default, the page will take it's title from the `name` key and display it both in the navigation menu and at the top of the page. A `title` key can be added if a longer page title is desired on the actual, e.g:

```
{
  name: "Releasing",
  href: "/guides/packages",
  title: "How the Nulogy Design Ops team releases packages"
},
```

## Adding a component page 

Run `yarn plop ComponentName` to generate the files that could be required for a new component page. 

e.g: 
```
> yarn plop NewComponent
yarn run v1.22.10
$ plop NewComponent
✔  ++ /src/pages/components/new-component.mdx
✔  ++ /src/playgrounds/new-component.js
✔  ++ /src/examples/new-component/ExampleNewComponent.jsx
✔  _+ /src/data/navigationLinks.js
✔  -> Your component page is ready! 😊
✨  Done in 6.12s.
```

This will create a playground file, an mdx file, a variation example, and a link in the navigation. 

## Deploying nulogy.design

nulogy.design should automatically deploy when a new PR is merged from master. For details on what's happening, check out the [actions tab](https://github.com/nulogy/nulogy.design/actions) of this repository.