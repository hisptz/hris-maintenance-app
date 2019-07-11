export interface MenuSetting {
    name: string;
    route: string;
    instruction: string;
    menuOptions: MenuOption[];
}
export interface MenuOption {
    name: string;
    route: string;
}
