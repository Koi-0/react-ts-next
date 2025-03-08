import { useEffect, useState } from "react";
import "./App.css";
import { getTodos, type Todo } from "./test";

type ToggleTodo = Omit<Todo, "title">;
const App = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    useEffect(() => {
        getTodos().then((data) => setTodoList(data.data));
    }, []);

    const [title, setTitle] = useState("");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleAddTodo = async () => {
        if (title === "") {
            return;
        }

        const newTodo: Todo = {
            id: crypto.randomUUID(),
            title,
            completed: false,
        };

        await fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify(newTodo),
        });

        setTodoList((prev) => [...prev, newTodo]);
        setTitle("");
    };

    const handleDeleteTodo = async (id: Todo["id"]) => {
        await fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE",
        });

        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    };

    const handleToggleTodo = async ({ id, completed }: ToggleTodo) => {
        await fetch(`http://localhost:3000/todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ completed: !completed }),
        });

        setTodoList((prev) =>
            prev.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !completed,
                    };
                }
                return todo;
            })
        );
    };

    return (
        <>
            <TodoList todoList={todoList} onDlelteClick={handleDeleteTodo} onToggleClick={handleToggleTodo} />
            <input type='text' value={title} onChange={handleTitleChange} />
            <button onClick={handleAddTodo}>등록</button>
        </>
    );
};

type TodoListProps = {
    todoList: Todo[];
    onDlelteClick: (id: Todo["id"]) => void;
    onToggleClick: (toggleTodo: ToggleTodo) => void;
};
const TodoList = ({ todoList, onDlelteClick, onToggleClick }: TodoListProps) => {
    return (
        <div>
            {todoList.map((todo) => (
                <TodoItem key={todo.id} {...todo} onDlelteClick={onDlelteClick} onToggleClick={onToggleClick} />
            ))}
        </div>
    );
};

type TodoItemProps = Todo & {
    onDlelteClick: (id: Todo["id"]) => void;
    onToggleClick: (toggleTodo: ToggleTodo) => void;
};
const TodoItem = ({ id, title, completed, onDlelteClick, onToggleClick }: TodoItemProps) => {
    return (
        <>
            <div>
                <div>id : {id}</div>
                <div
                    onClick={() => {
                        onToggleClick({ id, completed });
                    }}
                >
                    title : {title}
                </div>
                <div>{`completed : ${completed}`}</div>
                <button onClick={() => onDlelteClick(id)}>삭제</button>
            </div>
            ---
        </>
    );
};

export default App;
