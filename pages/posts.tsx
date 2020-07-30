import {useState, useEffect} from 'react'
import { MainLayout } from '../layouts/MainLayout'
import Link from 'next/link'
import {MyPost} from '../intefaces/post'
import { NextPageContext } from 'next'

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({posts: serverPosts}: PostsPageProps) {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts')
            const json = await response.json()
            setPosts(json)
        } 

        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return <MainLayout>
            <p>loading...</p>
        </MainLayout>
    }
    

    return (
        <MainLayout title={'postPage'}>
            <h1>Posts page</h1>
            <p>loremloremlore</p>

            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}><a>{post.title}</a></Link>
                    </li>
                ))}
            </ul>  
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
    if (!req) {
        return {posts: null}
    }
    const response = await fetch(`${process.env.API_URL}/posts`)
    const posts: MyPost[] = await response.json()

    return {
        posts
    }
}