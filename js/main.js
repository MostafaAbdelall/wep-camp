
    let fullName=document.getElementById('fullName');
    let Aducation=document.getElementById('Aducation');
    let Course=document.getElementById('Course');
    let email=document.getElementById('email');
    let Details=document.getElementById('Details');
    let submit=document.getElementById('submit');
    let claints;




    if(localStorage.myClaints!=null){
        claints= JSON.parse(localStorage.myClaints)
    }else{
        claints=[]
    }


    submit.onclick = function(){
        let nClaint={
            fullname: fullName.value,
            Aducation: Aducation.value,
            Course: Course.value,
            email: email.value,
            Details: Details.value,
        }
        claints.push(nClaint)
        localStorage.setItem("myClaints", JSON.stringify(claints))
        clearData()
    }

    function clearData(){
        fullName.value= '';
        Aducation.value= '';
        Course.value= ''; 
        email.value= '';
        Details.value= '';
    }



