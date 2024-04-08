import React from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const expenses = [
    { id: 1, desciption: "aaa", amount: 10, category: "Utilities" },
    { id: 2, desciption: "bbb", amount: 10, category: "Utilities" },
    { id: 3, desciption: "ccc", amount: 10, category: "Utilities" },
    { id: 4, desciption: "ddd", amount: 10, category: "Utilities" },
  ];

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}

export default App;
