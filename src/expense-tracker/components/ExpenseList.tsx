import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((Expense) => (
          <tr key={Expense.id}>
            <td>Expense.description</td>
            <td>Expense.amount</td>
            <td>Expense.category</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(Expense.id)}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>Total</tr>
        <tr>
          $
          {expenses
            .reduce((acc, Expense) => Expense.amount + acc, 0)
            .toFixed(2)}
        </tr>
        <tr></tr>
        <tr></tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
