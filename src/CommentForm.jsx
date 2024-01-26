import PropTypes from 'prop-types'
export function CommentForm({ postId , updateHandler }) {
    async function sendComment(data) {
        const response = await fetch(
            'http://localhost:3000/api/comments',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        )
        const responseJson = await response.json()
        if(responseJson.status === "success") {
            
            updateHandler()
        }
    }
    function submitHandler(e) {
        e.preventDefault()
        const dialog = e.target.parentElement
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        sendComment(data)
    }
    return(
        <>
            <form id="comment-form" method="dialog" onSubmit={submitHandler}>
                <div className="group">
                    <input type="hidden" name="postId" value={postId}/>
                    <label htmlFor="username">Username: </label>
                    <input id="username" type="text" name="username"/>
                </div>
                <div className="group">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" />
                </div>
                <div className="group">
                    <label htmlFor="comment-body">Comment:</label>
                    <textarea 
                        id="comment-body" 
                        cols={20} rows={5}
                        name="commentBody"
                    />
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

CommentForm.propTypes = {
    postId: PropTypes.string,
    updateHandler: PropTypes.func
}