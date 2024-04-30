const form=document.querySelector("form"),
fileInput=form.querySelector(".file-input"),
progressArea=document.querySelector(".progress-area"),
uploadedArea=document.querySelector(".uploaded-area");

form.addEventListener("click",()=>{
    fileInput.click();
});

fileInput.onchange = ({target}) =>{
       let file=target.files[0];
       if(file){
        let fileName=file.name;
        uploadFile(fileName);
       }
}

function uploadFile(name){
    let xhr=new XMLHttpRequest(); //creating new xml object ajax
    xhr.open("POST","php/upload.php");
    xhr.upload.addEventListener("progress", e =>{
        console.log(e);
    });
    let formData=new FormData(form);
    xhr.send(formData);
}