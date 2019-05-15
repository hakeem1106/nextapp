import React from 'react'
import App, { Containter } from 'next/app'
import '../css/style.css'


export default class DocStyle extends App{
    render(){
        return(
            <html>
            <Head>
            <link rel = "stylesheet" href="/static/style.css" />
            </Head>
            <body>
            </body>
            </html>
        )
    }
}