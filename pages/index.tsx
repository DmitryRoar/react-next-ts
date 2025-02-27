import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from '../layouts/MainLayout'

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>Hello Next</title>
            </Head>
            <h1>Hello next.js</h1>
            <p><Link href='/about'><a>About</a></Link></p>
            <p><Link href=' /posts'><a >Posts</a></Link></p>
        </MainLayout>
    )
}