document.getElementById("bmi-form").addEventListener("submit",function(e){

    e.preventDefault();


    const gender=document.getElementById('gender').value;
    const feet=parseInt(document.getElementById('feet').value);
    const inches=parseInt(document.getElementById('inches').value);
    const weight=parseFloat(document.getElementById('weight').value);
    const age=parseInt(document.getElementById('age').value);

    const height=(feet*0.3048)+(inches*0.0254);
    const bmi=(weight/(height*height)).toFixed(2);

    const rslt=document.getElementById('result');
    if(bmi<18.5){
        rslt.innerHTML=`Your BMI is ${bmi} kg/m\u00B2'. <br>
                        You are underweight`;
    }
    else if(bmi>18.5 && bmi<=24.9){
        rslt.innerHTML=`Your BMI is ${bmi} kg/m\u00B2.<br>
                        You are Healthy`;
    }
    else if(bmi>24.9 && bmi<29.9){
        rslt.innerHTML=`Your BMI is ${bmi} kg/m\u00B2.<br>
                        You are Overweight`;
    }
    else{
        rslt.innerHTML=`Your BMI is ${bmi} kg/m\u00B2.<br>
                        You are Obese`;
    }
    
});