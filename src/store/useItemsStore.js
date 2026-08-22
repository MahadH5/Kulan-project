import { create } from "zustand";

export const useItemsStore = create((set) => ({
  items: [],
  status: "idle",

  loadItems: async () => {
    set({ status: "loading" });
    try {
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      set({ items: data.products, status: "success" });
    } catch {
      set({ status: "error" });
    }
  },

  toggle: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      ),
    })),
}));
