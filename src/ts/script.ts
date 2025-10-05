import {sleep} from "@/ts/sleep";
import {version} from "@/init";
import {audioVis_startListen} from "@/ts/audioVis";
import {property_startListen} from "@/ts/property";

import figlet from "figlet";

document.addEventListener('DOMContentLoaded', function () {
    startFakeOutput();
});

function getShellHeadTime(strType:number=0):string{
    const outputDate:Date=new Date();
    switch (strType) {
        case 0:
            return `[${
                    String(outputDate.getFullYear()).padStart(4, '0')
                }/${
                    String(outputDate.getMonth()).padStart(2, '0')
                }/${
                    String(outputDate.getDate()).padStart(2, '0')
                } ${
                    String(outputDate.getHours()).padStart(2, '0')
                }:${
                    String(outputDate.getMinutes()).padStart(2, '0')
                }:${
                    String(outputDate.getSeconds()).padStart(2, '0')
                }]`;
        case 1:
            return `[${
                String(outputDate.getHours()).padStart(2, '0')
            }:${
                String(outputDate.getMinutes()).padStart(2, '0')
            }:${
                String(outputDate.getSeconds()).padStart(2, '0')
            }]`;
        default:
            return "error";
    }
}

async function startFakeOutput(){
    const so:HTMLElement=document.getElementById("startOutput")!;

    function getRanInt(min: number, max: number): number {
        const min_ = Math.ceil(min);
        return Math.floor(Math.random() * (Math.floor(max) - min_ + 1)) + min_;
    }
    const lodingMaxTime:number
        //= 1000;
        = 10;//debug time
    const outputData=[
        ["Wallpaper is loaded.",1000],
        [`Cyber Output Panel ${version} is loaded.`,50],
        ["System self-check execution:",20],
        ["To protect user privacy, the detection results will be hidden.",10],
        ["Get the Username...",10],
        ["Done. Username: [DATA EXPUNGED]",100],
        ["Check CPU status...",10],
        ["Done. Results: [DATA EXPUNGED]",200],
        ["Check GPU status...",10],
        ["Done. Results: [DATA EXPUNGED]",300],
        ["Check RAM status...",10],
        ["Done. Results: [DATA EXPUNGED]",200],
        ["Check Disk status...",10],
        ["Done. Results: [DATA EXPUNGED]",500],
        ["Scan local services...",10],
        ["Done. Results: [DATA EXPUNGED]",200],
        ["Scan network services...",10],
        ["Done. Results: [DATA EXPUNGED]",300],
        ["Program self-check execution:",20],
        ["Check for error...",10],
        ["Done. Results: Maybe no error.",300],
        ["Check the code integrity...",10],
        ["Done. Results: I don't know.",300],
        ["Check the program load status...",10],
        ["Done. Results: It's loading.",200],
        ["Program loading progress:",50],
        ["5%",getRanInt(1,lodingMaxTime)],
        ["10%",getRanInt(1,lodingMaxTime)],
        ["15%",getRanInt(1,lodingMaxTime)],
        ["20%",getRanInt(1,lodingMaxTime)],
        ["25%",getRanInt(1,lodingMaxTime)],
        ["30%",getRanInt(1,lodingMaxTime)],
        ["35%",getRanInt(1,lodingMaxTime)],
        ["40%",getRanInt(1,lodingMaxTime)],
        ["45%",getRanInt(1,lodingMaxTime)],
        ["50%",getRanInt(1,lodingMaxTime)],
        ["55%",getRanInt(1,lodingMaxTime)],
        ["60%",getRanInt(1,lodingMaxTime)],
        ["65%",getRanInt(1,lodingMaxTime)],
        ["70%",getRanInt(1,lodingMaxTime)],
        ["75%",getRanInt(1,lodingMaxTime)],
        ["80%",getRanInt(1,lodingMaxTime)],
        ["85%",getRanInt(1,lodingMaxTime)],
        ["90%",getRanInt(1,lodingMaxTime)],
        ["95%",getRanInt(1,lodingMaxTime)],
        ["100%",getRanInt(1,lodingMaxTime)],
        ["Done.",getRanInt(1,lodingMaxTime)],
        ["Switching right now.",10],
    ];
    for (let i=0;i<outputData.length;i++) {
        so.insertAdjacentText('beforeend', `${getShellHeadTime()} ${<string>outputData[i][0]}\n`);

        await sleep(<number>outputData[i][1]);
    }

    await sleep(500);

    so.style.display='none';//so.style.visibility='hidden';
    document.getElementById('main')!.style.display='';

    mainPageLoad();
}

async function mainPageLoad(){
    await outputBarStart();
    timeAndDateBarStart();
    effectBarStart();
    audioVis_startListen();
    property_startListen();
}
let date:Date;
async function timeAndDateBarStart() {
    figlet.defaults({
        fontPath: "./assets/font/figlet",
    });

    async function timerBarStart() {
        const timerBar = document.getElementById("timerBar")!;
        {
            let lock: boolean = true;
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

        let lastH:number=-1;
        //let lastMin:number=-1;

        outputBar_outputText("Note: The clock component is loaded.");initLoadNum++;

        while (true) {
            date = new Date();
            let lock: boolean = true;
            const nowH=date.getHours();
            //const nowMin=date.getMinutes();
            const timeStr=`${
                String(nowH).padStart(2, '0')
            }:${
                String(date.getMinutes()).padStart(2, '0')
            }:${
                String(date.getSeconds()).padStart(2, '0')
            }`;
            figlet.text(timeStr,
                {
                    font: 'Banner3',
                    //width: timerBar.offsetWidth,
                },
                (error, result) => {
                    if (result != null) {
                        const oldTxtSp: string[] = timerBar.textContent.split('\n');
                        const newTxtSp: string[] = result.split('\n');
                        let outTxtSp: string[] = oldTxtSp;

                        async function run() {
                            for (let i = 0; i < oldTxtSp.length + 1; i++) {
                                if (i < oldTxtSp.length)
                                    outTxtSp[i] = String('').padStart(69, '#');
                                if (i - 1 >= 0)
                                    outTxtSp[i - 1] = newTxtSp[i - 1];
                                {
                                    let outTxt: string = "";
                                    for (let j = 0; j < outTxtSp.length; j++) {
                                        outTxt += outTxtSp[j];
                                        if (j + 1 < outTxtSp.length)
                                            outTxt += "\n";
                                    }
                                    timerBar.textContent = outTxt;
                                }
                                await sleep(100);
                            }
                            lock = false;
                        }

                        run();
                    }
                }
            );
            if (nowH>lastH){
                if (lastH!=-1)
                    outputBar_outputText(`Attention, now the time is ${timeStr}`);
                lastH=nowH;
            }
            await sleep(1000);
            while (lock)
                await sleep(50);
        }
    }

    async function dateBarStart() {
        const dateBar: HTMLElement = document.getElementById("dateBar")!;
        {
            let lock: boolean = true;
            figlet.text('88/88/8888',
                {
                    font: 'Banner3',
                },
                (error, result) => {
                    dateBar.textContent = result!;
                    lock = false;
                })
            while (lock)
                await sleep(1000);
        }

        date = new Date();//放在外侧开始时刷新一次，后续靠timerBar组件刷新即可

        outputBar_outputText("Note: The calendar component is loaded.");initLoadNum++;

        while (true) {
            let lock: boolean = true;
            figlet.text(
                `${
                    String(date.getMonth()+1).padStart(2, '0')
                }/${
                    String(date.getDate()).padStart(2, '0')
                }/${
                    String(date.getFullYear()).padStart(4, '0')
                }`,
                {
                    font: 'Banner3',
                },
                (error, result) => {
                    if (result != null) {
                        const oldTxtSp: string[] = dateBar.textContent.split('\n');
                        const newTxtSp: string[] = result.split('\n');
                        let outTxtSp: string[] = oldTxtSp;

                        async function run() {
                            for (let i = 0; i < oldTxtSp.length + 1; i++) {
                                if (i < oldTxtSp.length)
                                    outTxtSp[i] = String('').padStart(97, '#');
                                if (i - 1 >= 0)
                                    outTxtSp[i - 1] = newTxtSp[i - 1];
                                {
                                    let outTxt: string = "";
                                    for (let j = 0; j < outTxtSp.length; j++) {
                                        outTxt += outTxtSp[j];
                                        if (j + 1 < outTxtSp.length)
                                            outTxt += "\n";
                                    }
                                    dateBar.textContent = outTxt;
                                }
                                await sleep(100);
                            }
                            lock = false;
                        }

                        run();
                    }
                }
            );
            await sleep(3000);
            while (lock)
                await sleep(50);
        }
    }

    timerBarStart();
    dateBarStart();
}

export let initLoadNum:number = 0;//加载完成的组件个数
export function initLoadNumAdd(){initLoadNum++;}
export var outputBar_outputText:(outputText:string)=>void=
    (outputText:string) =>{/*默认赋值空函数，避免被提前调用时报错*/console.log(`outputBar_outputText: ${outputText}`);};
async function outputBarStart(){
    //const outputBar=document.getElementById("outputBar")!;
    const outputBar_text:HTMLElement=document.getElementById("outputBar_text")!;

    let shellLine:number = 0;
    let olsClearLock:boolean = false;//清理程序锁，避免重复执行
    const clearShellMaxLine:number = 44;//到达此临界值时清理shell
    function outputLikeShell(opTxt:string){
        if (shellLine>=clearShellMaxLine && !olsClearLock){
            olsClearLock=true;
            const changeText=outputBar_text.textContent.split('\n').slice(shellLine/2);
            shellLine=changeText.length;
            outputBar_text.textContent=changeText.join('\n');
            olsClearLock=false;
        }
        outputBar_text.insertAdjacentText('beforeend', `${getShellHeadTime(1)} ${opTxt}\n`);
        shellLine++;
    }
    outputBar_outputText=(outputText:string)=>{
        outputLikeShell(outputText);
    }

    outputLikeShell("Loading components asynchronously...");

    (async () => {
        while (initLoadNum<4)
          await sleep(100);
        date = new Date();
        const outputData=[
            ["Done, all loaded.",500],
            ["Welcome, User [DATA EXPUNGED].",300],
            [`Date: ${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)}, ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)} ${date.getDate()}, ${date.getFullYear()}`,400],
            ["Have a nice day. :)",400],
        ]
        for (let i=0;i<outputData.length;i++){
            outputLikeShell(<string>outputData[i][0]);
            await sleep(<number>outputData[i][1]);
        }
    })().then();
}

async function effectBarStart(){
    const effectBar:HTMLElement[]=[document.getElementById("effectBar-16")!,document.getElementById("effectBar-2")!];
    /*
    const max=16;
    for (let i=0;i<max;i++){
        effectBar[0].textContent+=String('').padStart(38,'$');
        if (i+1<max)
            effectBar[0].textContent+='\n';
    }
    //用于计算和调试边框大小
    */
    const maxNum=16*38;

    function outputAsciiToHexAndBinary(input: string|null=null){
        let inputText:string='';
        if (input !=null)
            inputText = input;
        else {
            const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
            let randomString = '';
            for (let i = 0; i < 208; i++) {
                randomString += allChars[Math.floor(Math.random() * allChars.length)];
            }
            inputText=randomString;
        }

        let hex = '';
        let binary = '';

        for (let i = 0; i < inputText.length; i++) {
            const charC = inputText.charCodeAt(i);
            hex += charC.toString(16).padStart(2, '0') + (i + 1 < inputText.length ? ' ' : '');
            binary += charC.toString(2).padStart(8, '0') + (i + 1 < inputText.length ? ' ' : '');
        }

        effectBar[0].textContent=hex;
        effectBar[1].textContent=binary;
    }
    outputBar_outputText("Note: The code output component is loaded");initLoadNum++;
    while (true){
        outputAsciiToHexAndBinary();
        await sleep(800);
    }
}