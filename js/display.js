function display(){
//clear the field
document.getElementById("pets").innerHTML="";
//travel the pets array
for(var i=0;i<salon.pets.length;i++){
//create a template
    var tmp=`<div>
    <h3> ${salon.pets[i].name}</h3>
    <p>${salon.pets[i].age}</p>
    <p>${salon.pets[i].breed}</p>
    <p>${salon.pets[i].gender}</p>
    <p>${salon.pets[i].owner}</p>
    <p>${salon.pets[i].phone}</p>
    <p>${salon.pets[i].service}</p>
    <p>${salon.pets[i].pay}</p>
    </div>`
    //concatenate all info
    document.getElementById("pets").innerHTML+=tmp;
}
//display the template on html

}


//use a function
display();