//使用类型谓词：参数 is 类型
type FISH={
  name:string,
  swim:()=>void
}
type BIRD={
    name:string,
    fly:()=>void
  }

  function isFish(pet:FISH|BIRD) : pet is FISH{
      return (pet as FISH).swim !==undefined
  }

  function getSmallPet():FISH|BIRD {
    let f:FISH={
        name:"nimo",
        swim:()=>{
            console.log(`The fish  is swiming very fast`);   
        }
    }
    let b2:BIRD={
        name:"tracy",
        fly:()=>{
            console.log(`The bird  is flying`);
            
        }
     }
    return true? b2:f
  }

  let pet=getSmallPet()
  if(isFish(pet)){
      pet.swim()
  }else{
      pet.fly()
  }
  
 
  const zoo:(FISH|BIRD)[]=[getSmallPet(),getSmallPet(),getSmallPet()]
  const underWater1:FISH[]=zoo.filter(isFish)
  const underWater2:FISH[]=zoo.filter(isFish) as FISH[]
  const underWater3:FISH[]=zoo.filter((pet):pet is FISH=>{
     if(pet.name=='frog'){
       return false
     }
     return isFish(pet)
  })

  