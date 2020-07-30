import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'
import { async } from 'rxjs'
import { NextPageContext } from 'next'
import { MyPost } from '../../intefaces/post'

interface PostPageProps { 
    post: MyPost
}

export default function Post({post: serverPost}: PostPageProps) {
    const {query: {id}} = useRouter()

    const [post, setPost] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${id.id}`)
            const data = await response.json()

            setPost(data)
        }

        if (!serverPost) {
            load()
        }

    }, [])

    if (!post) {
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    } 

    return (
        <>
        {serverPost ? 
        <>
        <h1>{serverPost.title}</h1>
        <hr/>
        <p>{serverPost.body}</p>
        <Link href={'/posts'}><a>Back to Posts</a></Link>
        </> : <p>f5</p>
        }
        </>
    )
}

// Post.getInitialProps = async ({query, req}) => {
    
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//     const post = await response.json()
//     if (!req) {
//         return {post: null}    
//     }

//     return {
//         post
//     }
// }

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

export async function getServerSideProps({query}: PostNextPageContext) {    
    console.log('proc', process.env.API_URL)
    const response = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post: MyPost = await response.json()
    
    return {props: {post}}
}