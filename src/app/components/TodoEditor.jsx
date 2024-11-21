import React from 'react';

const TodoEditor = () => {
    return (
        <div>
            <h2>새로운 Todo 작성하기</h2>
            <div>
                <input type='text' placeholder='할 일을 추가로 입력해주세요.' className='flex border p-2 rounded' />
                <button onClick={onAdd}>할 일 추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;
