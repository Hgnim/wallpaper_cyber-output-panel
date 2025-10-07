import {wp_checkbox, wp_color, wp_combo, wp_file, wp_slider} from "@/type/property-model";

declare class wp_userProperties {
    fontcolor:wp_color|undefined;//font color
    bordercolor:wp_color|undefined;//border color
    backcolor:wp_color|undefined;//back color
    musicinfooutput:wp_checkbox|undefined;//music info output
    audiovisualizationmagnitude:wp_slider|undefined;//audio visualization magnitude
    glowfollowmouse:wp_checkbox|undefined;//glow follow mouse
    glowstrength:wp_slider|undefined//glow strength
    backimg:wp_file|undefined;//back img
    backimgopacity:wp_slider|undefined;//back img opacity
    backimgshow:wp_combo|undefined;//back img show
    backimgblur:wp_slider|undefined;//back img blur
}
export {wp_userProperties};
declare global {
    interface Window {
        wallpaperPropertyListener:any;
    }
}