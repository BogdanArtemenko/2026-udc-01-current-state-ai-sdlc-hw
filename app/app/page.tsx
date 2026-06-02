import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <main style={{ width: "100%", maxWidth: 480 }}>
      <h1>Notes</h1>
      <p style={{ opacity: 0.7 }}>
        Greenfield demo — додай завдання, познач виконані, стеж за лічильником
        активних.
      </p>
      <TodoList />
    </main>
  );
}
