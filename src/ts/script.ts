import {sleep} from "@/ts/sleep";
import {version} from "@/init";
import {audioVis_startListen} from "@/ts/audioVis";

import figlet from "figlet";

document.addEventListener('DOMContentLoaded', function () {
    startFakeOutput();
});

async function startFakeOutput(){
    const so:HTMLElement=document.getElementById("startOutput")!;

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
        ["Done. Results: Yes, it's loading.",200],
        ["Program loading progress:",50],
        ["10%",10],
        ["20%",50],
        ["30%",10],
        ["40%",30],
        ["50%",10],
        ["60%",20],
        ["70%",150],
        ["80%",10],
        ["90%",70],
        ["100%",80],
        ["Done.",10],
        ["Switching right now.",10],
    ];
    for (let i=0;i<outputData.length;i++) {
        so.insertAdjacentText('beforeend', `${<string>outputData[i][0]}\n`);
        await sleep(<number>outputData[i][1]);
    }

    await sleep(500);

    so.style.visibility='hidden';
    document.getElementById('main')!.style.display='';

    mainPageLoad();
    audioVis_startListen();
}

function mainPageLoad(){
    timeAndDateBarStart();
    outputBarStart();
    effectBarStart();
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

        while (true) {
            date = new Date();
            let lock: boolean = true;
            figlet.text(
                `${
                    String(date.getHours()).padStart(2, '0')
                }:${
                    String(date.getMinutes()).padStart(2, '0')
                }:${
                    String(date.getSeconds()).padStart(2, '0')
                }`,
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
            while (lock)
                await sleep(1000);
        }
    }

    async function dateBarStart() {
        const dateBar: HTMLElement = document.getElementById("dateBar")!;
        {
            let lock: boolean = true;
            figlet.text('8888/88/88',
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

        while (true) {
            date = new Date();
            let lock: boolean = true;
            figlet.text(
                `${
                    String(date.getFullYear()).padStart(4, '0')
                }/${
                    String(date.getMonth()).padStart(2, '0')
                }/${
                    String(date.getDate()).padStart(2, '0')
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
            while (lock)
                await sleep(3000);
        }
    }

    timerBarStart();
    dateBarStart();
}

async function outputBarStart(){
    const outputBar=document.getElementById("outputBar")!;

    /*const max=21;
    for (let i=0;i<max;i++){
        outputBar.textContent+=String('').padStart(45,'$');
        if (i+1<max)
            outputBar.textContent+='\n';
    }
    //用于计算和调试边框大小
    */
    const maxRow=21;
    const maxCol=45;
    let outRowNum=0;//表示已经输出了多少行
    let showTxtSp:string[]=new Array<string>(maxRow).fill('');
    function outputLikeShell(opTxt:string){
        let optTemp;
        if (opTxt.length<=maxCol)
            optTemp=opTxt;
        else
            optTemp=`${opTxt.substring(0,maxCol-3)}...`;

        if (outRowNum<maxRow){
            showTxtSp[outRowNum]=optTemp;
            outRowNum++;
        }else{
            showTxtSp.splice(0,1);
            showTxtSp.push(optTemp);
        }
        {
            let outTxt:string="";
            for (let j = 0; j < showTxtSp.length; j++) {
                outTxt += showTxtSp[j];
                if (j+1<showTxtSp.length)
                    outTxt+="\n";
            }
            outputBar.textContent=outTxt;
        }
    }

    date = new Date();
    const outputData=[
        ["Welcome, User [DATA EXPUNGED].",300],
        [`Date: ${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)}, ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)} ${date.getDate()}, ${date.getFullYear()}`,400],
        ["Have a nice day. :)",400],
    ]
    for (let i=0;i<outputData.length;i++){
        outputLikeShell(<string>outputData[i][0]);
        await sleep(<number>outputData[i][1]);
    }
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
    while (true){
        outputAsciiToHexAndBinary();
        await sleep(800);
    }
}