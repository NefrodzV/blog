import  { useEffect, useState } from 'react'
export function PostList() {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        async function fetchPosts() {
            try {
                const response = await fetch('http://localhost:3000/api/posts')
                const data = await response.json()
                setPosts(data.posts)
            } catch(e) {
                console.log("Something went wrong connecting to api: " + e)
            }
        }
        fetchPosts()
    },[])

    function createPost(post){
        return <li key={post._id} className='post'>{post.title}</li>
    }
    return(
            <ul className="posts">
                {posts.map(post => createPost(post))}
            </ul>
    )
}