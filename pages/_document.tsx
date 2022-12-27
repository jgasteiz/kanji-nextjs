import {Html, Head, Main, NextScript} from 'next/document'

const Document = () => {
    return (<Html>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <title>Kanji SRS</title>
        </Head>
        <body>
            <Main/>
            <NextScript/>
        </body>
    </Html>);
}

export default Document