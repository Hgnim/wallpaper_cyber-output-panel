import {wp_color} from "@/type/property-model";

declare class wp_userProperties {
    fontcolor:wp_color;
    musicInfoOutput:any;
}
export {wp_userProperties};
declare global {
    interface Window {
        wallpaperPropertyListener:any;
    }
}