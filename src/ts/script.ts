import {sleep} from "@/ts/sleep";
import {version} from "@/init";

import figlet from "figlet";

document.addEventListener('DOMContentLoaded', function () {
    startFakeOutput();
});

async function startFakeOutput(){
    const so:HTMLElement=document.getElementById("startOutput")!;

    const outputData=[
        ["Wallpaper is loaded.",1000],
        [`Cyber Output Panel ${version} is loaded.`,50],
        ["Self-check execution:",20],
        ["To protect user privacy, the detection results will be hidden.",10],
    ];
    for (let i=0;i<outputData.length;i++) {
        so.insertAdjacentText('beforeend', `${<string>outputData[i][0]}\n`);
        await sleep(<number>outputData[i][1]);
    }

    await sleep(500);

    so.style.visibility='hidden';
    document.getElementById('main')!.style.visibility='visible';

    mainPageLoad();
}

async function mainPageLoad(){
    const timerBar=document.getElementById("timerBar")!;


    figlet.defaults({
        fontPath: "./assets/font/figlet",
    });
    figlet.text('18:44', {
        font: 'Banner3',
        width: timerBar.offsetWidth,
        },
         (error, result)=>{
            timerBar.textContent=result!;
        }
        );

}
