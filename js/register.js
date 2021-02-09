const salon={
    name:"The Fashion Pet",
    address:{
        street:"Ave. University",
        number:"192k"
    },
    hours:{
        open: "8AM",
        close: "5pm"
    },
pets:[]
}
document.getElementById("footer-text").innerHTML=`
<p> ${salon.name} </p>
<p> ${salon.address.street}, ${salon.address.number} </p>
<p> It opens from ${salon.hours.open} to ${salon.hours.close}</p>
`;
// creat the pet class
class Pet{
    constructor(name,age,breed,gender,service,owner,phone,pay){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.pay=pay;
    }
}
//creat pets using the constructor
var scooby=new Pet("Scooby",50,"Dane","Male","Full Service", "Shaggy", "555-5555","cc");
var scrappy=new Pet("Scrappy",40,"Dane","Male","Shower", "Greg","555-0494","cc");
var speedy=new Pet("Speedy",30,"Mouse","Male","Full Service", "Shaggy", "555-5555","cc");

//push pets to array
//salon.pets=[scooby, scrappy, speedy];
salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(speedy);
console.log(salon.pets);

var txtName=document.getElementById("petNameTxt");
var txtAge=document.getElementById("petAgeTxt");
var txtBreed=document.getElementById("petBreedTxt");
var txtGender=document.getElementById("petGenderTxt");
var txtService=document.getElementById("petServiceTxt");
var txtOwner=document.getElementById("ownerNameTxt");
var txtPhone=document.getElementById("ownerPhoneTxt");
var txtPay=document.getElementById("ownerPayTxt");
   
function clear(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
    txtPay.value="";
}

function register(){
    
   var thePet=new Pet(txtName.value,txtAge.value,txtBreed.value,txtGender.value, txtService.value,txtOwner.value,txtPhone.value, txtPay.value);
console.log(thePet);
    // push the pet into the array
    salon.pets.push(thePet);
    //display function
    display();
    clear();
}



//how many in the array?
//for(var i=0;i<salon.pets.length;i++){
  //          document.getElementById(`Number of pets:${salon.pets.length}`);
  //          document.getElementById(salon.pets[i].name);
//}