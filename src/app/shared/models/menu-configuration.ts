export interface MenuConfiguration {
    name: string;
    route: string;
    menuOptions: Array<MenuOptions>
}

export interface MenuOptions {
    name: string;
    route: string;
}
