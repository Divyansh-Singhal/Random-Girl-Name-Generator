function gensample(count){
    
    let text = `{"names":[
        {"firstName":"Reena","lastName":"Mishra" },{"firstName":"Anna","lastName":"Smith" },{"firstName":"Peter","lastName":"Jones" },{"firstName":"Coraline","lastName":"Dodson" },{"firstName":"Sierra","lastName":"Orr" },{"firstName":"Mabel","lastName":"Todd" },{"firstName":"Noelle","lastName":"Mcintyre" },{"firstName":"Cataleya","lastName":"Castro" },{"firstName":"Charli","lastName":"Macias" },{"firstName":"Micah","lastName":"Wise" },{"firstName":"Rita","lastName":"Singh" },
      {"firstName":"Punam","lastName":"Chaudhary" },
      {"firstName":"Sita","lastName":"Gupta" },
      {"firstName":"Meena","lastName":"jain" },
      {"firstName":"Isha","lastName":"bansal" },
      {"firstName":"Nisha","lastName":"Singh" },
      {"firstName":"Kastoori","lastName":"Bisht" },
      {"firstName":"Nellie","lastName":"Feshier" },
      {"firstName":"Geeta","lastName":"Rani" },
      {"firstName":"Indira","lastName":"Gandhi" },
      {"firstName":"Tina","lastName":"Singh" },
      {"firstName":"Melan","lastName":"Vang" },
      {"firstName":"Miracle","lastName":"Stein" },
      {"firstName":"Mira","lastName":"Hudson" },
      {"firstName":"Ellison","lastName":"Ho" },
      {"firstName":"Lia","lastName":"Hall" },
      {"firstName":"Rebecca","lastName":"Odom" },
      {"firstName":"Amani","lastName":"Harrell" },
      {"firstName":"Evelynn","lastName":"Swanson" },
      {"firstName":"Kaiya","lastName":"Bird" },
      {"firstName":"Kylie","lastName":"Jenner" },
      {"firstName":"Haven","lastName":"Powers" },
      {"firstName":"Maeve","lastName":"Williamson" },
      {"firstName":"Delilah","lastName":"Hobbs" },
      {"firstName":"Elina","lastName":"Vaughan" },
      {"firstName":"Everleigh","lastName":"Scott" },
      {"firstName":"Kaisley","lastName":"Ford" },
      {"firstName":"Luciana","lastName":"Carney" },
      {"firstName":"Paris","lastName":"Cohen" },
      {"firstName":"Brynleigh","lastName":"Craig" },
      {"firstName":"Ellie","lastName":"Anderson" },
      {"firstName":"Maren","lastName":"Le" },
      {"firstName":"Lila","lastName":"Mcgee" },
      {"firstName":"Tessa","lastName":"Wolf" },
      {"firstName":"Holland","lastName":"Murphy" },
      {"firstName":"Yara","lastName":"Sandoval" },
      {"firstName":"Viviana","lastName":"Aguirre" },
      {"firstName":"Miracle","lastName":"Stein" },
      {"firstName":"Aurora","lastName":"Higgins" },
      {"firstName":"Anastasia","lastName":"Reid" }]}`;
    const obj = JSON.parse(text);
    var num=count;
    var ncount;
    
    const divcontainer = document.getElementById("namesectionarea");
    var inputnum=document.getElementById("innum");
    console.log(inputnum.value);
    if(num == 'random'){
        ncount=Math.floor(Math.random()*51);
        document.getElementById("innum").value=ncount;
    }
    else if(num == 5){
        ncount=5;
        document.getElementById("innum").value=ncount;
    }
    else if(num == 10){
        ncount=10;
        document.getElementById("innum").value=ncount;
    }
    else if(num == 15){
        ncount=15;
        document.getElementById("innum").value=ncount;
    }
    else if(num == 'generate'){
        ncount=inputnum.value;
        if(ncount>50){
            alert("Maximum 50 names can be generated");
            return;
        }
    }
    else if(num == 'all'){
        ncount=50;
        document.getElementById("innum").value=ncount;
    }
    document.getElementById("outtext").innerHTML="";
    divcontainer.innerHTML="";
    for(var i=0; i<ncount; i++){
        var iname=Math.floor(Math.random()*50);
       var newdiv=document.createElement("div");
       newdiv.classList.add("column","is-narrow");
       divcontainer.appendChild(newdiv);
       const insdiv=document.createElement("div");
       insdiv.classList.add("card","has-background-light","has-text-centered","customize-card");
       newdiv.appendChild(insdiv);
       const insdiv2=document.createElement("div");
         insdiv2.classList.add("card-content");
            insdiv.appendChild(insdiv2);
            const insdiv3=document.createElement("span");
            insdiv3.classList.add("name-text");
            insdiv3.innerHTML=obj.names[iname].firstName+" ";
            insdiv3.id="name"+i;
            insdiv2.appendChild(insdiv3);
        const insdiv4=document.createElement("span");
        insdiv4.classList.add("name-text");
        insdiv4.innerHTML=" " + obj.names[iname].lastName;
        insdiv4.id="name"+i;
        insdiv2.appendChild(insdiv4);
       document.getElementById("outtext").innerHTML+=obj.names[iname].firstName+" "+obj.names[iname].lastName+"\n";
       document.getElementById("generatatedNames").innerHTML="Showing "+ncount;
    }
    
}
function downloadFile() {
    const element = document.createElement('a');
    const content = document.getElementById('outtext').value;
  
    const blob = new Blob([content], { type: 'plain/text' });
  
    const fileUrl = URL.createObjectURL(blob);
    
    const filename="Random Generated Text.txt";
    
    element.setAttribute('href', fileUrl); 
    element.setAttribute('download', filename);
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    
    document.body.removeChild(element);
  };
