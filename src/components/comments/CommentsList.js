import React, { Component } from 'react';
import CommentsItem from './CommentsItem';


class CommentsList extends Component {

    render() {

        const comments = this.props.comments.map(data => <CommentsItem data={data} key={data.id} deleteCommentHandler={this.props.deleteCommentHandler} />);

        return (
            <div className="comments-list">
                {comments}
            </div>
        );
    }
}

export default CommentsList;