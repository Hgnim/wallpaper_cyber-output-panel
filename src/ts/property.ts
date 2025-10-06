import {outputBar_outputText} from "@/ts/script";
import {wp_userProperties} from "@/type/property";
import {wp_color} from "@/type/property-model";
import {audioVisualizationMagnitude, musicInfoOutput} from "@/ts/data";

export function property_startListen() {
    try {
        // noinspection JSUnusedGlobalSymbols
        window.wallpaperPropertyListener = {
            applyUserProperties: function(properties:wp_userProperties) {
                //try{
                //outputBar_outputText(properties.fontcolor.value!.toString()/* +" "+properties.musicinfooutput.toString()*/);
                if (properties.fontcolor) {
                    setCssColor(wp_color.getRgbCssString(properties.fontcolor.value),'--font-color');
                }
                if(properties.bordercolor){
                    setCssColor(wp_color.getRgbCssString(properties.bordercolor.value),'--border-color');
                }
                if (properties.backcolor){
                    setCssColor(wp_color.getRgbCssString(properties.backcolor.value),'--back-color');
                }
                if (properties.musicinfooutput) {
                   musicInfoOutput.value=properties.musicinfooutput.value!;
                }
                if (properties.audiovisualizationmagnitude){
                    audioVisualizationMagnitude.value=properties.audiovisualizationmagnitude.value!;
                }
                //}catch (e:any){outputBar_outputText("[DebugError]: " + e.toString());}
            },
        };

        outputBar_outputText("Note: User property settings have been loaded.");
    }
    catch /*(e)*/ {
        outputBar_outputText("Error: User property settings failed to load.");
    }
}
function setCssColor(color: string|undefined,cssName:string) {
    if (color)
        document.documentElement.style.setProperty(cssName,color);
}