import { useState } from "react";

function List() {
    let [todo, setTodo] = useState('test');
    let [todoList, setTodoList] = useState([]);
    let [css, setCss] = useState([]);

    function insertTodo() {
        let list = [...todoList];
        let cssList = [...css];
        setCss(cssList, cssList.push(false));
        setTodoList(list, list.push({todo}));

    }

    function deleteTodo(idx) {
        let list = [...todoList]
        list.splice(idx, 1);
        setTodoList(list);
    }

    function checkTodo(idx) {
        let cssStatus = [...css];
        cssStatus[idx] = !cssStatus[idx]
        setCss(cssStatus);
        
    }
    return (
        <>
            <div className="list-area">
                <div>
                    <input type="text" onChange={(ev)=>{setTodo(ev.target.value)}}/>
                    <button onClick={insertTodo}>입력</button>
                </div>
                <table>
                    {todoList.map((todo, idx)=> (
                        <tr key={todo.todo}>
                            <td style={{width:400, backgroundColor:"white", textDecoration: css[idx] ? "line-through" : "none"}}>{todo.todo}</td>
                            <td><button onClick={()=>{checkTodo(idx)}}>완료</button></td>
                            <td><button onClick={()=>{deleteTodo(idx)}}>삭제</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default List;