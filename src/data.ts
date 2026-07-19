export const data = [
  { name: "ffgg", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

export const categories = {
  Food: {
    subcategories: [
      "Groceries",
      "Coffee",
      "Restaurants",
      "Fast Food",
      "Snacks",
    ],
  },

  Transport: {
    subcategories: ["Fuel", "Taxi", "Public Transport", "Parking", "repair"],
  },

  Shopping: {
    subcategories: ["Clothing", "Electronics", "Home", "Beauty", "Gifts"],
  },

  Entertainment: {
    subcategories: ["Movies", "Games", "Streaming", "Hobbies"],
  },

  Housing: {
    subcategories: ["Rent", "Utilities", "Internet", "Repairs"],
  },

  Health: {
    subcategories: ["Doctor", "Pharmacy", "Gym", "Dentist"],
  },

  Salary: {
    subcategories: [],
  },

  Freelance: {
    subcategories: [],
  },

  Investment: {
    subcategories: [],
  },

  Other: {
    subcategories: [],
  },
} as const;
