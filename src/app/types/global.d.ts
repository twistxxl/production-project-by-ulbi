declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames
}


declare module "*.svg" {
    import React = require("react");
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
