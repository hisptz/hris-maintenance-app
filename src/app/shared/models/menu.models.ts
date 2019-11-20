export interface Menu {
    name: string;
    route: string;
    instruction: string;
    menuOptions: Array<MenuOption>;
}

export interface MenuOption {
    name: string;
    route: string;
}
