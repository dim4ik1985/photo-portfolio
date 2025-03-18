export interface INavItemProps {
  item: {
    id: number;
    title: string;
    path?: string;
    submenu?: { id: number; title: string; path: string }[];
  };
}

export interface IData {
  id: number;
  title: string;
  src: { id: number; src: string }[];
}
