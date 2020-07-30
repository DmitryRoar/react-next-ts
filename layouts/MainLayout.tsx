import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({children, title = 'next app'}) {
    return (
        <>
            <Head>
                <title>{title || 'Next Course'}</title>
                <meta name="keywords" content="keywords words" />
            </Head>
            <nav>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>about</a></Link>
            <Link href='/'><a>Home</a></Link>
            </nav>
            <main>
                {children}
            </main>

    <style jsx>{`
        nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            top: 0;
            background: #19191b;
            display: flex;
            justify-context: space-between;
            align-itensm: center;
        }

        nav a {
            color: #fff;
            text-decoration: none;
        }

        main {
            margin: 60px 0 0 0;
            padding: 1rem; 
        }
    `}</style>
        </>
    )
}