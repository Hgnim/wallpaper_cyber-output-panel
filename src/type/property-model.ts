export class wp_color{
    value: string | undefined;

    /*private _wp_color: string | undefined;
    get wp_color(): string | undefined {
        return this._wp_color;
    }
    set wp_color(value: string) {
        this._wp_color = value;
    }*/

    get rgbCssString():string | undefined{
        if (this.value!=undefined){
            let colorStr:string[] = this.value.split(' ');
            let colorNum:number[];

            colorNum = colorStr.map(function(c:any) {
                return Math.ceil(c * 255);
            });
            return  'rgb(' + colorNum + ')';
        }
        else
            return undefined;
    }
}