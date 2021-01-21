function typer(box,arr){
    // var box1 = document.querySelector("#me");
    // const arr1 = ["Udit!","a coder!","a dev!","Udit!","a dev!","a coder!"]
    const typing_delay = 200;
    const deleting_delay = 150;
    const delay_text = 3000;

    let textIndex = 0;
    let charIndex = 0;
    

    function typing(){
        if(charIndex < arr[textIndex].length){
            if(charIndex < arr[textIndex].length){
                box.innerHTML += arr[textIndex].charAt(charIndex);
            }
            // if(charIndex < arr1[textIndex].length){
            //     box1.innerHTML += arr1[textIndex].charAt(charIndex);
            // }
            charIndex++;
            setTimeout(typing,typing_delay);
        }
        else{
            charIndex--;
            // console.log(charIndex);
            setTimeout(deleting,delay_text);
        }
    }
    function deleting(){
        if(charIndex >= 0){
            // console.log(charIndex,arr[textIndex].substring(0,charIndex));
            if(charIndex < arr[textIndex].length){
                box.innerHTML = arr[textIndex].substring(0,charIndex);
            }
            // if(charIndex < arr1[textIndex].length){
            //     box1.innerHTML = arr1[textIndex].substring(0,charIndex);
            // }
            charIndex--;
            setTimeout(deleting,deleting_delay);
        }
        else{
            textIndex++;
            if(textIndex>=arr.length){
                textIndex = 0;
            }
            setTimeout(typing,delay_text);
        }
    }
    window.onload = function(){
        setTimeout(typing,delay_text);
    }
}

typer(document.querySelector("#typing"),document.querySelector("#typing").getAttribute("data-items").split("|"))
// typer(document.querySelector("#me"),["Udit!","a coder!","a dev!","a student"])