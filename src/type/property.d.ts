import {wp_checkbox, wp_color, wp_slider} from "@/type/property-model";

declare class wp_userProperties {
    fontcolor:wp_color|undefined;//font color
    bordercolor:wp_color|undefined;//border color
    backcolor:wp_color|undefined;//back color
    musicinfooutput:wp_checkbox|undefined;//music info output
    audiovisualizationmagnitude:wp_slider|undefined;//audio visualization magnitude
}
export {wp_userProperties};
declare global {
    interface Window {
        wallpaperPropertyListener:any;
    }
}