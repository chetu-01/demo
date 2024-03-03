export class log{
    static sucess(msg : string){
        console.log(`%c ${msg}`,'color:green');
    }
    static danger(msg : string){
        console.log(`%c ${msg}`,'color:red');
    }
    static warn(msg : string){
        console.log(`%c ${msg}`,'color:yellow');
    }
}