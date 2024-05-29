import Documnet, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Documnet {
  render() {
    <Html>
      {/* Head */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}
