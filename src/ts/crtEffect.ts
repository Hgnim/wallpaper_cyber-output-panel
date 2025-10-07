import {glowFollowMouse} from "@/ts/data";

const crt_glow=document.getElementById('crt_glow');
export function crtGlow_move(event:MouseEvent){
    if (crt_glow && glowFollowMouse.value) {
        const pos = {x: event.clientX / window.innerWidth * 100, y: event.clientY / window.innerHeight * 100};
        //console.log(`${event.clientX}, ${event.clientY} ${pos.x}, ${pos.y}`);
        if (pos.x > 50) {
            crt_glow.style.left='-10%';
            crt_glow.style.right=`${(-(pos.x-50))*2-10}%`;
        }
        else{
            crt_glow.style.right='-10%';
            crt_glow.style.left=`${(-(50-pos.x))*2-10}%`
        }
        if (pos.y > 50) {
            crt_glow.style.top='-10%';
            crt_glow.style.bottom=`${(-(pos.y-50))*2-10}%`;
        }
        else{
            crt_glow.style.bottom='-10%';
            crt_glow.style.top=`${(-(50-pos.y))*2-10}%`;
        }
    }
}