import { useState } from "react";

const Level4 = () => {
  return (
    <div className="relative top-0 left-0 w-full h-svh overflow-hidden flex items-center justify-center">
      <Kanban />
    </div>
  );
};

function Kanban() {
  const [columns, setColumns] = useState({
    todo: ["Task 1", "Task 2"],
    inProgress: ["Task 3"],
    done: ["Task 4"],
  });
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* TODO */}
      <Column title="Todo" items={columns.todo} />

      {/* DOING */}
      <Column title="Doing" items={columns.inProgress} />

      {/* DONE */}
      <Column title="Done" items={columns.done} />
    </div>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="w-64 h-80 bg-[#f4f4f4] p-2.5 rounded-md">
      <h3>{title}</h3>

      {items.map((item) => (
        <div
          key={item}
          style={{
            padding: "10px",
            margin: "5px 0",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
export default Level4;
