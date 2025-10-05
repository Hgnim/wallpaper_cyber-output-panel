import {outputBar_outputText} from "@/ts/script";
import {wp_userProperties} from "@/type/property";

export function property_startListen() {
    try {
        // noinspection JSUnusedGlobalSymbols
        window.wallpaperPropertyListener = {
            applyUserProperties: function(properties:wp_userProperties) {
                try{
                //outputBar_outputText(properties.fontcolor.value!.toString()/* +" "+properties.musicinfooutput.toString()*/);
                if (properties.fontcolor) {
                    /*const v=properties.fontcolor.rgbCssString;
                    outputBar_outputText(v!);
                    if(v!=undefined)*/
                        document.documentElement.style.setProperty('--font-color',`rgb(${properties.fontcolor.value!})`);
                }
                if (properties.musicInfoOutput) {

                }
                }catch (e:any){outputBar_outputText("[DebugError]: " + e.toString());}
            },
        };

        outputBar_outputText("Note: User property settings have been loaded.");
    }
    catch (e) {
        outputBar_outputText("Error: User property settings failed to load.");
    }
}