export interface MenuConfiguration {
  name: string;
  route: string;
  instruction: string;
  menuOptions: Array<MenuOptions>;
}

export interface MenuOptions {
  name: string;
  route: string;
}

export interface ItemList {
  name: string;
  position: string;
  access: string;
  lastUpdated: string;
}
