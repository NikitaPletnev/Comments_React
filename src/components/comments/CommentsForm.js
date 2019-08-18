import React, { Component } from 'react';

//Создание страницы с формой для комментариев
class CommentsForm extends Component {
    render() {
        return (
            <form className="comments-form" onSubmit={this.props.sendCommentHandler}>
                <div className="comments-form__row">
                    <label htmlFor="input_author" className="comments-form__label">Автор:</label>
                    <div className="comments-form__controls">
                        <input type="text" name="author" id="input_author"/>
                    </div>
                </div>
                <div className="comments-form__row">
                    <label htmlFor="input_text" className="comments-form__label">Текст:</label>
                    <div className="comments-form__controls">
                        <textarea name="text" id="input_text" rows="5"></textarea>
                    </div>
                </div>
                <div className="comments-form__row comments-form__row--actions">
                    <button type="submit">Отправить</button>
                </div>

            </form>
        );
    }
}

export default CommentsForm;