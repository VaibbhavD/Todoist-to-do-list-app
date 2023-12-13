const reman="aa6f99e331dd4c2d87de168bb7278f80";
const don="4cd78f95e55f4c48a41b4cb54299ba19";


function savedetails(event){
   event.preventDefault();
   const name=event.target.name.value;
   const description=event.target.description.value;

   const todoobj={
       name,
       description,
   }
   axios.post("https://crudcrud.com/api/"+reman+"/reaminingtodo",todoobj)
   .then(res=>console.log(res))
   .catch(err=>console.log(err))

   showitemdetails(todoobj);

   document.getElementById("name").value="";
   document.getElementById("description").value="";
}

// ---------------------------------------------------

    window.addEventListener("DOMContentLoaded",()=>{
        axios.get("https://crudcrud.com/api/"+reman+"/reaminingtodo")
        .then(response => {
            for(var i=0;i<response.data.length;i++)
            {
                if(response.data.status==404)
                {
                    continue;
                }
                showitemdetails(response.data[i]);
            }
        })
        .catch(err=>console.log(err))
        })

// =---------------------------------------------

function showitemdetails (todoobj){
    itemobj={
        _id:todoobj._id,
        name:todoobj.name,
        description:todoobj.description,
    }
   const parent=document.getElementById("remaing");
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
    var id=todoobj._id;
       savedtodo(todoobj); 
       del(id);
       parent.removeChild(child);
   }
   child.appendChild(donee);

    //    ------------------------------------------------------   
   const remov=document.createElement('input')
   remov.type="button";
   remov.className="remov";
   remov.value="REMOVE";
   remov.onclick=()=>{
    parent.removeChild(child);
    axios.delete("https://crudcrud.com/api/"+reman+"/reaminingtodo/"+itemobj._id)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
   }
   child.appendChild(remov);
}

// --------------------------------------------

function savedtodo (todoobj){
    itemobj={
        name:todoobj.name,
        description:todoobj.description,
    }
    var id=todoobj._id;
    axios.post("https://crudcrud.com/api/"+don+"/done",itemobj)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    showsavedtodo(todoobj);
}

function del(id){
    axios.delete("https://crudcrud.com/api/"+reman+"/reaminingtodo/"+id)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    console.log(itemobj._id);
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

// ------------------------------------------------------------------

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/"+don+"/done")
    .then(response => {
        for(var i=0;i<response.data.length;i++)
        {

            showsavedtodo(response.data[i]);
        }
    })
    .catch(err=>console.log(err))
    })