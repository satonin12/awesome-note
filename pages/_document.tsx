import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* eslint-disable-next-line @next/next/no-title-in-document-head */}
					<title>Awesome Note</title>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		)
	}
}

export default MyDocument
