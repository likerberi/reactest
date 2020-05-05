import React from 'react';

const TodoTemplate = ({form, children}) => {
    return (
        <main className='todo-template' style={}>
            <div className='title'>
                돌고 돌아 리액트
            </div>
            <section className='form-wrapper'>
                {form}
            </section>
            <section className='todos-wrapper'>
                {children}
            </section>
        </main>
    );
};

export default TodoTemplate;
