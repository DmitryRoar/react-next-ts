import Link from 'next/link'
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
    return (
        <>
            <h1 className={classes.error}>Error 404</h1>
            <Link href="/"><a>back to home</a></Link>
        </>
    )
}