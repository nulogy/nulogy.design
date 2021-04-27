module.exports = function (plop) {
  plop.setHelper("toCamelCase", (str) => str.charAt(0).toLowerCase() + str.slice(1));
  plop.setHelper("toSnakeCase", (str) => str.split(/(?=[A-Z])/).join('-').toLowerCase());
  plop.setHelper("toReadableCase", (str) => str.split(/(?=[A-Z])/).join(' '));
  // controller generator
  plop.setGenerator('controller', {
    description: 'new component page',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Enter a PascalCase name for your component:'
    }],
    actions: [{
      type: 'add',
      path: 'src/pages/components/{{toSnakeCase name}}.mdx',
      templateFile: 'src/templates/component-page.hbs'
    },
    {
      type: 'add',
      path: 'src/playgrounds/{{toSnakeCase name}}.js',
      templateFile: 'src/templates/component-config.hbs'
    },
    {
      type: 'add',
      path: 'src/examples/{{toSnakeCase name}}/Example{{name}}.jsx',
      templateFile: 'src/templates/component-example.hbs'
    },
    {
      type: "append",
      path: "src/data/navigationLinks.js",
      pattern: `/* Add routes here */`,
      template: `{
        name: "{{name}}",
        href: "/components/{{toSnakeCase name}}"
      },`
    },
    function (data) {
      return "Your component page is ready! 😊";
    },
    ],
  });
};