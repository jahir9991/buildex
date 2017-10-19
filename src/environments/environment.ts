// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false  ,
  API_ENDPOINT: 'http://localhost:5000/api/',
  // API_ENDPOINT: 'http://45.76.184.39:5000/api/',

  AppName: 'builderex',
  hmr:false
};
