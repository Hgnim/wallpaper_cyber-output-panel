import {outputBar_outputText} from "@/ts/script";
import {wallpaperMediaIntegration_enum} from "@/type/audioVis";
import {sleep} from "@/ts/sleep";

const musicBar:HTMLElement=document.getElementById("musicBar_show")!;
const musicBar_msg:HTMLElement=document.getElementById("musicBar_msg")!;

let audioListener_valueCheck_lock:boolean=false;//数值检测锁，表示在音乐运行时数值检测器是否启动
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

    if(!audioListener_valueCheck_lock) {
        audioListener_valueCheck_lock=true;
        async function audioListener_valueCheck() {
            //留此作为备用，因为wallpaperMediaStatusListener函数只能侦听更改的值，无法获取。所以无法得知是否可以获取用户的媒体状态
            if (!(nothingValue < audioArray.length)) {
                musicBarPlayStatusChange(window.wallpaperMediaIntegration.PLAYBACK_STOPPED, 1);
            } else if (musicBar_msg.checkVisibility()) {
                musicBarPlayStatusChange(window.wallpaperMediaIntegration.PLAYBACK_PLAYING, 1);
            }
            await sleep(100);//降低频率，优化程序
            audioListener_valueCheck_lock=false;
        }
        audioListener_valueCheck();
    }
}

//播放器的开始、暂停、停止按钮的点击事件
function wallpaperMediaPlaybackListener(event:any) {
    musicBarPlayStatusChange(event.state,0);
}
let musicBarPlayStatus: wallpaperMediaIntegration_enum;//放在try语句初始化，否则在外部浏览器调试时会报错
function musicBarPlayStatusChange(state: wallpaperMediaIntegration_enum,callId:number){
    let pass:boolean=false;
    switch (state){
        case window.wallpaperMediaIntegration.PLAYBACK_STOPPED:
            //当暂停时，禁止根据可视化音频是否有数值来决定是否为无音频
            if (!(musicBarPlayStatus==window.wallpaperMediaIntegration.PLAYBACK_PAUSED && callId==1)) {
                musicBar_msg.style.visibility = "visible";
                musicBar_msg.textContent = "No sound.";
                pass=true;
            }
            break;
        case window.wallpaperMediaIntegration.PLAYBACK_PAUSED:
            musicBar_msg.style.visibility="visible";
            musicBar_msg.textContent="Paused sound.";
            pass=true;
            break;
        case window.wallpaperMediaIntegration.PLAYBACK_PLAYING:
        default:
            //当暂停时，禁止根据可视化音频是否有数值来决定是否为播放状态
            if (!(musicBarPlayStatus==window.wallpaperMediaIntegration.PLAYBACK_PAUSED && callId==1)) {
                musicBar_msg.style.visibility = "hidden";
                pass = true;
            }
            break;
    }
    if(pass)
        musicBarPlayStatus=state;
}

function wallpaperMediaPropertiesListener(event:any) {
    const theDataHead:string[]=[
        "Title: ",
        "Artist: ",
        "Sub Title: ",
        "Album Title: ",
        "Album Artist: ",
        "Genres: ",
        "Content Type: "
    ];
    const theData:string[]=[
        event.title,
        event.artist,
        event.subTitle,
        event.albumTitle,
        event.albumArtist,
        event.genres,
        event.contentType
    ];
    let outputData:string[]=[];
    for (let i=0;i<theData.length;i++) {
        if (theData[i]!='' && theData[i]!=null)
            outputData.push(theDataHead[i]+theData[i]);
    }
    if (outputData.length>0) {
        let od:string='';
        for(let i=0;i<outputData.length;i++) {
            od+=outputData[i];
            if (i+1<outputData.length)
                od+="; ";
            else
                od+='.';
        }
        outputBar_outputText(`Music start. ${od}`);
    }
}

/*
let test:boolean;
function wallpaperMediaStatusListener(event:any) {
    test=event.enabled;
}*/

export function audioVis_startListen() {
    try {
        musicBarPlayStatus=window.wallpaperMediaIntegration.PLAYBACK_STOPPED;
        window.wallpaperRegisterAudioListener(wallpaperAudioListener);
        window.wallpaperRegisterMediaPlaybackListener(wallpaperMediaPlaybackListener);
        //window.wallpaperRegisterMediaStatusListener(wallpaperMediaStatusListener);
        window.wallpaperRegisterMediaPropertiesListener(wallpaperMediaPropertiesListener);

        outputBar_outputText("Note: Audio Visualization has been loaded.");
    }
    catch (e) {
        musicBar_msg.style.visibility="visible";
        musicBar_msg.textContent="Error.";
        outputBar_outputText("Error: Audio Visualization failed to load.");
    }
}
