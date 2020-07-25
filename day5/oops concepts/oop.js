class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    static greet(){
        console.log("Hello There");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email} , lucoins are ${this.luCoins} , Courses = ${this.courses}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }
    addCoins(user){
        user.luCoins++;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return this;
    }
    removeCoins(user){
        if(user.luCoins>0){
        user.luCoins--;
        console.log(`${user.name}  lucoins as decremented and he has ${user.luCoins} coins left`);}
        else{
            console.log(`${user.name} has 0 lucoins.`);
        }
        return this;
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   removeCourse(user,course){
    let index=user.courses.indexOf(course);
    user.courses.splice(index,1);
    console.log(`${user.name}, ${course} course is removed.`);
    console.log(user);
}
}
let ramu = new User('ramu kaka',20,'ramukaka@gmail.com')
let rider = new User('Darks rider',20,'darksrider@gmai.com')
let ironbat = new Moderator('ironbat',19,'bat@gmail.com','Moderator');
let lakhshya = new Admin('lakshya',18,'laksh@gmail.com');
let users = [ramu,rider,ironbat,lakhshya];
 
ramu.login();
User.greet();
ironbat.addCoins(ramu);
ironbat.addCoins(ramu);
lakhshya.addCourse(ramu,"react");
lakhshya.addCourse(ramu,"angular");
ironbat.removeCoins(ramu);
lakhshya.removeCourse(ramu,"react");   
ramu.getDetails();
ramu.logout();