export class log{
    static sucess(msg : string){
        console.log(`${msg}`,'color:green');
    }
    static danger(msg : string){
        console.log(`${msg}`,'color:red');
    }
    static warn(msg : string){
        console.log(`${msg}`,'color:yellow');
    }
}