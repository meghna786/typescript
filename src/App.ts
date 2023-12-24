//DATA TYPES with variables and functions
const world='hello'
let a :string='var'

function givename(a:string,b:string):string{
      return a+" "+b;
}

const givefullname=(a:string,b:string):string=>{
      return a+" "+b;
}


//unknown and type assertion
let varAny:any=56;
let varunknown:unknown=23;

let str1:string= varAny;
let str2:string=varunknown as string;

let varInt:number=10;
let varStr:string=(varInt as unknown) as string;
console.log('varstr is ',varStr);


// DOM- typescript gives variables generic types such as Element, EventTarget
// we need to define specific types for them
let inputEle: HTMLInputElement= document.querySelector('.foo');

inputEle.addEventListener('blur',(event)=>{
      let tar=event.target as HTMLInputElement;
      console.log(tar.value);
})


//CLASSES
interface UserInterfaceAgain{
      getFullName():string
}

class User implements UserInterfaceAgain{
      private readonly firstName:string;
      private readonly lastName:string;
      static readonly maxAge=50; // readonly is similar to const

      constructor(first: string, last:string){
            this.firstName=first;
            this.lastName=last
      }
      getFullName(){
            return this.firstName+' '+this.lastName;
      }

}
console.log(User.maxAge); // static is accessible by CLASS and not instance
let userAgain= new User('Merry','Christmas');
userAgain.getFullName();


//GENERIC INTERFACES
interface UserInterface<T,V>{
      id:string,
      data:T,
      meta:V
}

let user1:UserInterface<string, string[]>={
      id:'12345',
      data:'user is studying',
      meta:['react', 'typescript']
}

let user2:UserInterface<{weight: string,height: string}, string>={
      id:'123456',
      data:{
            weight:'20kg',
            height:'55cm'
      },
      meta:'my cat stella guys'
}


//ENUMS
enum WorkStatusEnum{
      started='yes has started',
      procastinated='oopsies',
      done='dont ask me, Ill hand-in after a week',
      submit='no more work please'
}

console.log(WorkStatusEnum.started);
let statusOfsubmission:WorkStatusEnum=WorkStatusEnum.done;
statusOfsubmission=WorkStatusEnum.submit;
