'use client';

import React, { useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const mockTodoData = [
    {
        id: 1,
        isDone: false,
        task: '고양이 밥주기',
        createDate: '2024.04.20',
    },
    {
        id: 2,
        isDone: true,
        task: '감자, 맛동산 캐기',
        createDate: '2024.04.21',
    },
    {
        id: 3,
        isDone: false,
        task: '고양이 츄루주기',
        createDate: '2024.04.22',
    },
];

const Todo = () => {
    const [todos, setTodos] = useState(mockTodoData);

    // 할 일 추가하는 함수
    const addTodo = (task) => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                isDone: false,
                task: task,
                createDate: new Date().toLocaleDateString(),
            },
        ]);
    };

    return (
        <div>
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList mockTodoData={todos} />
        </div>
    );
};

export default Todo;
