import PropTypes from 'prop-types'
import { CommentItem } from './CommentItem'

export function CommentList({ comments }) {

    function createComment(comment) {
        return <CommentItem key={comment._id} comment={comment} />
    }

    return (
        <ul className='comment-list'>
            {comments?.map(comment => createComment(comment))}
        </ul>
    )
}

CommentList.propTypes = {
    comments : PropTypes.array
}