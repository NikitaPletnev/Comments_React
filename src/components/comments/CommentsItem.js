import React, { Component } from 'react';

//Создание комментария и отрисовка его на странице
class CommentsItem extends Component {

    render() {

        const
            id = this.props.data.id,
            author = this.props.data.author,
            text = this.props.data.text,
            date = new Date(this.props.data.date).toLocaleString();

        return (
            <div className="comments-item">
                <div className="comments-item__captions">
                    <div className="author">{ author }</div>
                    <div className="date">{ date }</div>
                </div>
                <div className="comments-item__text">{ text }</div>
                <div className="comments-item__actions">
                    <a href="#" onClick={(e) => { this.props.deleteCommentHandler(e, id) }}>Удалить</a>
                </div>
            </div>
        );
    }
}

export default CommentsItem;