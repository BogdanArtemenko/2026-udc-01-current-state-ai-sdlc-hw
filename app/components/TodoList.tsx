"use client";

import { useMemo, useState } from "react";

type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [draft, setDraft] = useState("");

  const activeCount = useMemo(
    () => todos.filter((t) => !t.done).length,
    [todos],
  );

  function addTodo() {
    const title = draft.trim();
    if (!title) return;
    setTodos((prev) => [...prev, { id: Date.now(), title, done: false }]);
    setDraft("");
  }

  function toggle(id: number) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
        style={{ display: "flex", gap: 8 }}
      >
        <input
          aria-label="New task"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Що треба зробити?"
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit">Додати</button>
      </form>

      <p>Активних: {activeCount}</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ padding: "4px 0" }}>
            <label style={{ display: "flex", gap: 8, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggle(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.done ? "line-through" : "none",
                  opacity: todo.done ? 0.5 : 1,
                }}
              >
                {todo.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
