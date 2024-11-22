'use client';

import React, { useEffect, useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    // 마운트 시
    // 1. 초기 데이터 로드
    useEffect(() => {
        // localStorage에서 'todos' 키로 저장된 데이터를 가져옴
        // JSON.parse() 함수를 이용하여 문자열을 객체로 변환
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        // 가져온 데이터로 상태 업데이트
        setTodos(savedTodos);
    }, []); // 빈 배열: 컴포넌트가 처음 마운트될 때만 실행

    // 2. 데이터 자동 저장
    useEffect(() => {
        // todos 상태가 변경될 때마다 localStorage에 저장
        // JSON.stringify() 함수를 이용하여 객체를 문자열로 변환
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]); // todos가 변경될 때마다 실행

    const addTodo = (task) => {
        const newTodo = {
            id: todos.length + 1,
            isDone: false,
            task: task,
            createDate: new Date().toLocaleDateString(),
        };
        setTodos([newTodo, ...todos]);
    };

    const onUpdate = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
            })
        );
    };

    const onDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className='flex flex-col gap-4 p-8 pb-40'>
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList mockTodoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
};

export default Todo;
