export class NavbarMenu {
    constructor(
    public id: number,
    public title: string,
    public routerLink: string,
    public hasSubMenu: boolean,
    public subMenuType: string,
    public menuLinkType: string,
    public parentId: number) { }
}