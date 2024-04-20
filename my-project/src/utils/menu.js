import { list, check, todo, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "Bar",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Don't have",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "Have",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Recepies",
    icon: todo,
    link: "/incomplete",
  },
];

export default menu;