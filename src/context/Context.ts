import React from "react";

export const budgetContext = React.createContext(null);

// type Action =
//   | { type: "ADD_TRANSACTION"; payload: Transaction }
//   | { type: "EDIT_TRANSACTION"; payload: Transaction }
//   | { type: "DELETE_TRANSACTION"; payload: string }
//   | { type: "ADD_POT"; payload: Pot }
//   | { type: "EDIT_POT"; payload: Pot }
//   | { type: "DELETE_POT"; payload: string }
//   | { type: "ADD_TO_POT"; payload: { potId: string; amount: number } }
//   | { type: "WITHDRAW_FROM_POT"; payload: { potId: string; amount: number } }
//   | { type: "SET_BUDGET"; payload: Budget }
//   | { type: "DELETE_BUDGET"; payload: string };

export const initialState = JSON.parse(localStorage.getItem("budgetApp")) || {
  transactions: [
    {
      title: "Starbucks",
      date: "24-12-12",
      category: "Food",
      subcategory: "Coffee",
      amount: 26,
      type: "expense",
    },
    {
      title: "June Salary",
      date: "24-12-32",
      category: "Salary",
      amount: 6,
      type: "income",
    },
  ],
  pots: [],
  budgets: [],
};

export const budgetReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: [
          ...state.transactions.filter((item) => item.id !== action.payload),
        ],
      };
    case "ADD_POT":
      return {
        ...state,
        pots: [...state.pots, action.payload],
      };
    case "EDIT_POT":
      return {
        ...state,
        pots: state.pots.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item,
        ),
      };
    case "DELETE_POT":
      return {
        ...state,
        pots: [...state.pots.filter((item) => item.id !== action.payload)],
      };
    case "ADD_TO_POT":
      return {
        ...state,
        pots: state.pots.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item,
        ),
      };
    case "ADD_BUDGET":
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };
    case "DELETE_BUDGET":
      return {
        ...state,
        budgets: [
          ...state.budgets.filter((item) => item.id !== action.payload),
        ],
      };
  }
};
