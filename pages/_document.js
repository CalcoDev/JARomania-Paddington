
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "RM93g6ev0UaREJ0bjsk1D",
                domain: "www.chatbase.co"
              };
              `,
            }}
          />
          <script
            defer
            src="https://www.chatbase.co/embed.min.js"
            chatbotId="RM93g6ev0UaREJ0bjsk1D"
            domain="www.chatbase.co"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;