export function textSlicer(text:string,max:number=50):string{
    if (text.length>=max) {
    return text.slice(0,max)+" ...."
    }
    return text;
}