export const DRAGABBLE_ITEMS = [
  {
    id: "1",
    content: "Item 1",
    color: "bg-red-500",
  },
  {
    id: "2",
    content: "Item 2",
    color: "bg-green-500",
  },
  {
    id: "3",
    content: "Item 3",
    color: "bg-blue-500",
  },
  {
    id: "4",
    content: "Item 4",
    color: "bg-yellow-500",
  },
  {
    id: "5",
    content: "Item 5",
    color: "bg-purple-500",
  },
];

export type DraggableItem = (typeof DRAGABBLE_ITEMS)[number];
