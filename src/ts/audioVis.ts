import {outputBar_outputText} from "@/ts/script";

const musicBar:HTMLElement=document.getElementById("musicBar_show")!;
const musicBar_msg:HTMLElement=document.getElementById("musicBar_msg")!;

function wallpaperAudioListener(audioArray: any) {
    musicBar.textContent=String('').padStart(128,'0');
    let otTxtSp:string[]=new Array<string>(50).fill('');
    let nothingValue:number=0;//值为空的个数，如果全部为空则无音频
    audioArray.forEach((audio:number) => {
        function getValue(ad:number) {
            if (ad>0){
                ad*=5;//提高数值，避免效果不明显
                if (ad<=1){
                    return ad*otTxtSp.length;
                }
                else
                    return otTxtSp.length;
                }
            else {
                nothingValue++;
                return 0;
            }
        }
        const vaule=getValue(audio);
        let num=0;
        for (let i=otTxtSp.length-1;i>=0;i--) {
            if (num<vaule)
                otTxtSp[i]+='0';
            else
                otTxtSp[i]+=' ';
            num++;
        }
    })

    let outTxt:string="";
    for (let j = 0; j < otTxtSp.length; j++) {
        outTxt += otTxtSp[j];
        if (j+1<otTxtSp.length)
            outTxt+="\n";
    }
    musicBar.textContent=outTxt;

    if (!(nothingValue<audioArray.length)){
        musicBar_msg.style.visibility="visible";
        musicBar_msg.textContent="No sound.";
    }
    else if (musicBar_msg.checkVisibility()){
        musicBar_msg.style.visibility="hidden";
    }
}

export function audioVis_startListen() {
    /*musicBar.textContent=String('').padStart(128,'0');
    for (let i=0;i<50-1;i++){
        musicBar.textContent+="\n0";
    }
    //musicBar.style.height=musicBar.clientHeight+"px";
    musicBar.textContent='';
    //初始化框，现在不需要了
    */

    try {
        // @ts-ignore
        window.wallpaperRegisterAudioListener(wallpaperAudioListener);
    }
    catch (e) {
        musicBar_msg.style.visibility="visible";
        musicBar_msg.textContent="Error.";
    }
}
