export interface INavigateItemProps {
  id: number;
  title: string;
  path?: string;
  submenu?: { id: number; title: string; path: string }[];
  anchor?: string;
}

export interface IData {
  id: number;
  title: string;
  src: { id: number; src: string }[];
}
