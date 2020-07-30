import Router from 'next/router'

export default function About({title}) {

    const linkClickHandler = () => {
        return Router.push('/')
    }

    return (
        <>
            <h1>{title}</h1>

            <button onClick={linkClickHandler}>Go To Home</button>
            <button onClick={() => Router.push('/posts')}>Go To Posts</button>
        </>
    )
}

About.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`)
    const data = await response.json()

    return {
        title: data.title
    }
}