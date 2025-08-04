import {sleep} from "@/ts/sleep";
import {version} from "@/init";
import {audioVis_startListen} from "@/ts/audioVis";

import figlet from "figlet";

document.addEventListener('DOMContentLoaded', function () {
    startFakeOutput();

    audioVis_startListen();
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
    document.getElementById('main')!.style.display='';

    mainPageLoad();
}

function mainPageLoad(){
    timerBarStart();

}

async function timerBarStart(){
    const timerBar=document.getElementById("timerBar")!;
    figlet.defaults({
        fontPath: "./assets/font/figlet",
    });
    {
        let lock:boolean=true;
        figlet.text('88:88:88',
            {
                font: 'Banner3',
            },
            (error, result) => {
               timerBar.textContent = result!;
               lock = false;
            })
        while (lock)
         await sleep(1000);
    }

    while (true) {
        const date=new Date();
        let lock:boolean=true;
        figlet.text(
            `${
                String(date.getHours()).padStart(2,'0')
            }:${
                String(date.getMinutes()).padStart(2,'0')
            }:${
                String(date.getSeconds()).padStart(2,'0')
            }`,
            {
                font: 'Banner3',
                //width: timerBar.offsetWidth,
            },
            (error, result) => {
                if(result!=null) {
                    const oldTxtSp:string[]=timerBar.textContent.split('\n');
                    const newTxtSp:string[]=result.split('\n');
                    let outTxtSp:string[]=oldTxtSp;

                    async function run(){
                        for (let i=0;i<oldTxtSp.length+1;i++) {
                            if (i<oldTxtSp.length)
                                outTxtSp[i]=String('').padStart(69,'#');
                            if (i-1>=0)
                                outTxtSp[i-1]=newTxtSp[i-1];
                            {
                                let outTxt:string="";
                                for (let j = 0; j < outTxtSp.length; j++) {
                                    outTxt += outTxtSp[j];
                                    if (j+1<outTxtSp.length)
                                        outTxt+="\n";
                                }
                                timerBar.textContent=outTxt;
                            }
                            await sleep(100);
                        }
                        lock = false;
                    }
                    run();
                }
            }
        );
        while (lock)
            await sleep(1000);
    }
}