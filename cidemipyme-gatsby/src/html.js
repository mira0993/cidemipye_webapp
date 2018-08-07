import React from "react"
import favicon from 'images/logo_favicon_32.png';
import preview from 'images/page_preview.png';


let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta property="og:title" content="CIDEMIPYME" />
          <meta property="og:description" content="Hacemos Negocio su Negocio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.cidemipymes.com.mx/" />
          <meta property="og:image" content={preview} />
          <link rel="icon" href={favicon}/>
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          <div id="fb-root"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.1&appId=212011879637045&autoLogAppEvents=1';
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              `,
            }}
          />
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />

          {this.props.postBodyComponents}
        </body>

      </html>
    )
  }
}
