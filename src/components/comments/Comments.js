import React, { Component } from 'react';
import Lodash from 'lodash';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';

//Получение комментов из локального хранилища
const commentsBase = {

    getComments: () => {

        if (!this.comments)
            this.comments = JSON.parse(window.localStorage.getItem('comments')) || [];

        return this.comments;
    },

    setComment: (data) => {

        this.comments.push(data);

        window.localStorage.setItem('comments', JSON.stringify(this.comments));

        return true;

    },

    removeComment: (commentId) => {

        Lodash.remove(this.comments, {id: commentId});

        window.localStorage.setItem('comments', JSON.stringify(this.comments));

    }
};

//Новые комменты и проверки
class Comments extends Component {

    state = {
        comments: commentsBase.getComments()
    };

    deleteCommentHandler = (e, id) => {

        e.preventDefault();

        commentsBase.removeComment(id);

        this.setState({comments: commentsBase.getComments()});

    };

    sendCommentHandler = (e) => {

        e.preventDefault();

        const data = {
            id: `comment_${Math.ceil(Math.random()*1000)}`,
            author: e.target.author.value.replace(/(\<(\/?[^>]+)>)/g, ''),
            text: e.target.text.value.replace(/(\<(\/?[^>]+)>)/g, ''),
            date: new Date().getTime()
        };

        if(data.author === '' || data.author === null){
            alert("Введите имя автора,пожалуйста!");
            return
        }

        if(data.text ==='' || data.text === null){
            alert("Введите текст комментария,пожалуйста!");
            return
        }

        commentsBase.setComment(data);

        e.target.reset();

        this.setState({comments: commentsBase.getComments()});

    };
//Новая отрисовка страницы
    render() {
        return (
            <div className="comments">
                <CommentsList
                    deleteCommentHandler={this.deleteCommentHandler}
                    comments={this.state.comments} />
                <CommentsForm
                    sendCommentHandler={this.sendCommentHandler} />
            </div>
        );
    }
}

export default Comments;
