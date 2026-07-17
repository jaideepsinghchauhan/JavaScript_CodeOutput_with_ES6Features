class SingletonClass {

    private static _instance : SingletonClass
    private constructor() {
        console.log("we can check how may times i log to console as well")
    }

    public static getInstance() {
        return this._instance || (this._instance = new SingletonClass()) 
    }

    // important here instead of this._instance we can use SingletonClass.instance as well (attention)
}

const classA = SingletonClass.getInstance()
const classB = SingletonClass.getInstance()

console.log(classA === classB)  // should log true