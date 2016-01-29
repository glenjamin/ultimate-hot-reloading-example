import { env, googleAnalyticsId } from '../setup/environment';

const defaultInitialState = {};
const defaultTitle = 'Universal React Redux';
const defaultDescription = 'A minimal template for a Universal JavaScript application';

export default (
  html = '',
  initialState = defaultInitialState,
  title = defaultTitle,
  description = defaultDescription
) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="NOODP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content=${description} />
        <title>${title}</title>
      </head>
      <body>
        <section data-js="app">${html}</section>
        <script type="text/javascript" charSet="utf-8" >window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
        <script type="text/javascript" charSet="utf-8" async src=${env === 'development' ? '/scripts/dev_bundle.js' : '/scripts/application.min.js'}></script>
        <script type="text/javascript" charSet="utf-8" >(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', '${googleAnalyticsId}', 'auto');ga('send', 'pageview')</script>
      </body>
    </html>
  `;
};
// {/*<link rel="stylesheet" type="text/css" href="/styles/globals.min.css" />*/}
// {/*<link rel="stylesheet" type="text/css" href="${env === 'development' ? '/styles/application.css' : '/styles/application.min.css'}" />*/}
