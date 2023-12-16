// -------------------------------------- APIs ID
const remaning="5d4e688f9a5342ceaa26cfcacdf457d1";

// -----------------------------------------------function savedetails
function savedetails(event){
   event.preventDefault();
   const name=event.target.name.value;
   const description=event.target.description.value;

   const todoobj={
       name,
       description,
       done:false,
   }
   async function storedata(todoobj){
   const resonse=await axios.post("https://crudcrud.com/api/"+remaning+"/reaminingtodo",todoobj)
   showitemdetails(resonse.data);
   }

   storedata(todoobj);
   
   document.getElementById("name").value="";
   document.getElementById("description").value="";
}

// ---------------------------------------------------window listner display data 

    window.addEventListener("DOMContentLoaded",()=>{
       async function displaydata(){
        const res= await axios.get("https://crudcrud.com/api/"+remaning+"/reaminingtodo")
        
            for(var i=0;i<res.data.length;i++)
            {
                if(res.data[i].done==false)
                {
                   showitemdetails(res.data[i]);
                }
                else{
                    showsavedtodo(res.data[i]);
                }
            }

        }
        displaydata();
    })
        

// =---------------------------------------------add data and display on remaning section

function showitemdetails (todoobj){
    itemobj={
        name:todoobj.name,
        description:todoobj.description,
        done:todoobj.done,
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
   
//    --------------------------------------------------------- done button 

   const donee=document.createElement('input')
   donee.type="button";
   donee.className="donee";
   donee.value="DONE";
   donee.onclick=()=>{
    donnnclick();
   }
   child.appendChild(donee);

    //    ------------------------------------------------------remove function

   const remov=document.createElement('input')
   remov.type="button";
   remov.className="remov";
   remov.value="REMOVE";
   remov.onclick=async()=>{
    const res=await axios.delete("https://crudcrud.com/api/"+remaning+"/reaminingtodo/"+todoobj._id);
    alert('Remove Succesfull !');
    parent.removeChild(child);
   }
    child.appendChild(remov);

    // ------------------------------------------------async done function 
async function donnnclick(){
    const obj={
        name:todoobj.name,
        description:todoobj.description,
        done:true,
    }
   const res=await axios.put("https://crudcrud.com/api/"+remaning+"/reaminingtodo/"+todoobj._id,obj)
   console.log(res)
   showsavedtodo(obj);
   parent.removeChild(child);
   alert("Done Succesfull!");  
}
}
// ----------------------------------------------------savedone data display on done section
function showsavedtodo (todoobj){
    itemobj={
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



// async function savedtodo (todoobj){
//     itemobj={
//         name:todoobj.name,
//         description:todoobj.description,
//     }
//     const url= "https://crudcrud.com/api/"+don+"/done";
//     const res=await axios.post(url,itemobj)
//     console.log(res);
//     showsavedtodo(todoobj);
// }

// ----------------------------------------------------------

// async function del(id){
//     const res=await axios.delete("https://crudcrud.com/api/"+reman+"/reaminingtodo/"+id)
// }
// -------------------------------------------------------



// ------------------------------------------------------------------

// window.addEventListener("DOMContentLoaded",()=>{
//     async function getdata(){
//         const reaponse= await axios.get("https://crudcrud.com/api/"+don+"/done")
        
//             for(var i=0;i<reaponse.data.length;i++)
//             {
//                 showsavedtodo(reaponse.data[i]);
//             }
//         }
//         getdata();
//     })