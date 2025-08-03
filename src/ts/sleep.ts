export function sleep(interval:number) {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
}

//from https://github.com/Hgnim/MJYY_Web/blob/main/src/ts/global/sleep.ts