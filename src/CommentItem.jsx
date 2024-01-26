import PropTypes from 'prop-types'

export function CommentItem({ comment }) {
    return <li>{comment.body}</li>
}

CommentItem.propTypes = {
    comment: PropTypes.object
}