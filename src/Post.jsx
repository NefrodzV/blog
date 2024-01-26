import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { CommentList } from './CommentList' 
import { CommentForm } from "./CommentForm"
export function Post() {
    const { id } = useParams() 
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const controller =  new AbortController()
    
    useEffect(() => {
        async function getPostAndComments() {
            const [postResponse, commentsResponse] = await Promise.all([
                fetch(
                    `http://localhost:3000/api/posts/${id}`,
                    {signal: controller.signal}
                ).catch((e) => console.log("Error getting post:" + e)),
                fetch(
                    `http://localhost:3000/api/comments?post=${id}`,
                    {signal: controller.signal}
                ).catch(e => console.log("Error getting comments:" + e))
            ])
            const postJson = await postResponse.json()
            const commentsJson = await commentsResponse.json()
            setPost(postJson.data.post)
            setComments(commentsJson.data.comments)
            console.log("Fetch post and comments done")
        }
        getPostAndComments()
    },[])

    async function updateComments() {
        console.log("updating comments")
        console.log(id)
        try {
            const response = await fetch(
                `http://localhost:3000/api/comments?post=${id}`
            )
            const json = await response.json()
            const comments = json.data.comments
            setComments(comments)
        } catch(e) {
            console.log("Error updating comments"+ e)
        }
    }

    return(
        <>
            <h1 className="post-title">{ post.title }</h1>
            <p className="post-body">{ post.body }</p>
            <CommentList comments={ comments }/>
            <dialog open={true}>
                <CommentForm postId={ id } updateHandler={updateComments}/>
            </dialog>
        </>
    )
}