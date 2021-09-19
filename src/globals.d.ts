declare module "*.riot" {
    import { RiotComponent } from "riot";
    declare var component: RiotComponent;
    export default component;
}
declare module "@riotjs/ssr" {
    import { RiotComponent } from "riot";
    declare function render(name: string, component: RiotComponent): string;
    export default render;
}