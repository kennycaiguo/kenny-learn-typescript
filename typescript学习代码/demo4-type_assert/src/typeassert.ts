const mycanvas=document.getElementById("myCanvas") as HTMLCanvasElement

const mycanvas2=<HTMLCanvasElement>document.getElementById("myCanvas")

 //string 和number不能直接转换需要转为any或者unkown后再转换，
const x=('hello' as any) as number
const y=('hi' as unknown) as number