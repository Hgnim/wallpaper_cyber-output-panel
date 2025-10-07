import {outputBar_outputText} from "@/ts/script";
import {wp_userProperties} from "@/type/property";
import {wp_color} from "@/type/property-model";
import {audioVisualizationMagnitude, glowFollowMouse, musicInfoOutput} from "@/ts/data";

export function property_startListen() {
    try {
        // noinspection JSUnusedGlobalSymbols
        window.wallpaperPropertyListener = {
            applyUserProperties: function(properties:wp_userProperties) {
                //try{
                //outputBar_outputText(properties.fontcolor.value!.toString()/* +" "+properties.musicinfooutput.toString()*/);
                if (properties.fontcolor) {
                    setCssValue(wp_color.getRgbCssString(properties.fontcolor.value),'--font-color');
                }
                if(properties.bordercolor){
                    setCssValue(wp_color.getRgbCssString(properties.bordercolor.value),'--border-color');
                }
                if (properties.backcolor){
                    setCssValue(wp_color.getRgbCssString(properties.backcolor.value),'--back-color');
                }

                if (properties.musicinfooutput) {
                   musicInfoOutput.value=properties.musicinfooutput.value!;
                }
                if (properties.audiovisualizationmagnitude){
                    audioVisualizationMagnitude.value=properties.audiovisualizationmagnitude.value!;
                }

                if (properties.glowfollowmouse){
                    glowFollowMouse.value = properties.glowfollowmouse.value!;
                    if (properties.glowfollowmouse.value==false){
                        const crt_glow=document.getElementById('crt_glow');
                        if (crt_glow){
                            crt_glow.style.left='-10%';
                            crt_glow.style.right='-10%';
                            crt_glow.style.top='-10%';
                            crt_glow.style.bottom='-10%';
                        }
                    }
                }
                if (properties.glowstrength){
                    setCssValue(`${properties.glowstrength.value}%`,'--crt_glow_end-value');
                }

                if (properties.backimg){
                    const bgimg=document.getElementById('background-img');
                    if(bgimg) {
                        if (properties.backimg.value!=undefined && properties.backimg.value!="") {
                            bgimg.style.backgroundImage = `url('file:///${properties.backimg.value}')`;
                            bgimg.style.display = 'unset';
                        }
                        else
                            bgimg.style.display = 'none';
                    }
                }
                if (properties.backimgopacity){
                    const bgimg=document.getElementById('background-img');
                    if (bgimg)
                        bgimg.style.opacity=(properties.backimgopacity.value!/100).toString();
                }
                if (properties.backimgshow){
                    const bgimg=document.getElementById('background-img');
                    if (bgimg){
                        switch (properties.backimgshow.value){
                            case '0':
                                bgimg.style.backgroundSize='cover';
                                break;
                            case '1':
                                bgimg.style.backgroundSize='100% 100%';
                                break;
                        }
                    }
                }
                if (properties.backimgblur){
                    setCssValue(`${properties.backimgblur.value}px`,'--background-img_filter_blur');
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
function setCssValue(value: string|undefined,cssName:string) {
    if (value)
        document.documentElement.style.setProperty(cssName,value);
}