import {crtGlow_move} from "@/ts/crtEffect";
//import {outputBar_outputText} from "@/ts/script";

/*function testButton_click(){
    outputBar_outputText("test button clicked");
    return true;
}
(window as any).testButton_click=testButton_click;*/


document.onmousemove = (event:MouseEvent) => {
    crtGlow_move(event);
};