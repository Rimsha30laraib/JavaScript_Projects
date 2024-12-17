
let String="";
let buttons= document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            if (String.includes('^')) {
                // Handle power calculation if ^ is present
                let parts = String.split('^');
                if (parts.length === 2) {
                    let base = parseFloat(parts[0]);
                    let exponent = parseFloat(parts[1]);
                    String = Math.pow(base, exponent); // Calculate the power
                } else {
                    String = "Error"; // Invalid input
                }
            } else {
                // Evaluate the string normally for other operations
                try {
                    String = eval(String);
                } catch (error) {
                    String = "Error";
                }
        }
        document.querySelector('input').value=String;         
    }
        else if(e.target.innerHTML=='AC'){
            String="";
            document.querySelector('input').value=String;         
        }
        else if(e.target.innerHTML=='C'){
            String = String.slice(0, -1); // Remove the last character
            document.querySelector('input').value=String;         
        }
        else{
            console.log(e.target);
            String=String+e.target.innerHTML;
            document.querySelector('input').value=String;        }
    })
})
