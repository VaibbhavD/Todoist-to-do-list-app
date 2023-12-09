const apiid="33565f3feefb484499b59440112e2b0c";


function savedetails(event){
   event.preventDefault();
   const name=event.target.name.value;
   const description=event.target.description.value;

   const todoobj={
       name,
       description,
   }

   

   showitemdetails(todoobj);
   document.getElementById("name").value="";
   document.getElementById("description").value="";

}



   window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/"+apiid+"/inventorystocks")
    .then(response => {
        for(var i=0;i<response.data.length;i++)
        {
            showsavedtodo(response.data[i]);
        }
    })
    .catch(err=>console.log(err))
    })


function showitemdetails (todoobj){
    itemobj={
        _id:todoobj._id,
        name:todoobj.name,
        description:todoobj.description,
    }
   const parent=document.getElementById("remaing");
   const parent2=document.getElementById("done");
   const child=document.createElement("li");

   const pname=document.createElement("ol");
   pname.className="ol";
   pname.textContent=todoobj.name;
   const pdes=document.createElement("ol");
   pdes.className="ol";
   pdes.textContent=todoobj.description;
   
   child.appendChild(pname);
   child.appendChild(pdes);
   parent.appendChild(child);
   

   const donee=document.createElement('input')
   donee.type="button";
   donee.className="donee";
   donee.value="DONE";
   donee.onclick=()=>{
    
    parent.removeChild(child);
    parent2.appendChild(child);
    axios.post("https://crudcrud.com/api/"+apiid+"/inventorystocks",todoobj)
   .then(res=>console.log(res))
   .catch(err=>console.log(err))
   }
   child.appendChild(donee);

   const remov=document.createElement('input')
   remov.type="button";
   remov.className="remov";
   remov.value="REMOVE";
   remov.onclick=()=>{
    parent.removeChild(child);
    axios.delete("https://crudcrud.com/api/"+apiid+"/inventorystocks/"+todoobj._id)
    .then(res=>console.log(res))
    .then(err=>console.log(err));
   }
   child.appendChild(remov);


}

function showsavedtodo (todoobj){
    itemobj={
        _id:todoobj._id,
        name:todoobj.name,
        description:todoobj.description,
    }
   const parent2=document.getElementById("done");
   const child=document.createElement("li");

   const pname=document.createElement("ol");
   pname.className="ol";
   pname.textContent=todoobj.name;
   const pdes=document.createElement("ol");
   pdes.className="ol";
   pdes.textContent=todoobj.description;
   
   child.appendChild(pname);
   child.appendChild(pdes);
   parent2.appendChild(child);
   
}