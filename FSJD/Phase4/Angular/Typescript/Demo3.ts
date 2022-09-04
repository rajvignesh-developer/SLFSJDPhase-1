export class Demo3
{
    public name="Vignesh"
    constructor()
    {
        
        console.log("Demo 3 "+this.name)
    }
}
var x = new Demo3()
export class A extends Demo3
{
    //public name="hari"
    constructor()
    {
        super();
        console.log("Hi A "+this.name)
    }
}
var v = new A()