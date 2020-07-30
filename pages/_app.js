import '../styles/main.css'
import NextNProgress from 'nextjs-progressbar'

export default function MyApp({Component, pageProps}) {
    return (
        <>
        <NextNProgress
            color="red"
            startPosition="0.3"
            stopDelayMs="200"
            height="5"
        />
            <Component {...pageProps} />
            {/* <style jsx global>{
                `
                body {
                    background: darkblue;
                }
                `}
                </style>   */}
        </>
    )
}