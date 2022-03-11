interface User{
    admin:boolean
}

interface DB{
    filterUsers(filter:(this:User)=>boolean):User[]
}

const db:DB={
    filterUsers:(filter:(this:User)=>boolean)=>{
        let user1={
            admin:true
        }
        let user2={
            admin:false
        }
      return [user1,user2]
    }
}

const admins=db.filterUsers(function(this:User){ //这里不能使用箭头函数，因为箭头函数是不允许有this对象的
      return this.admin
})

console.log(admins);
