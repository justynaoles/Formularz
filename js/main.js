(function() {

var form = document.querySelector("#contact-form"),
    fields = form.querySelectorAll("[data-error]");


    form.addEventListener('submit',function(e) {
        
        e.preventDefault();

    var errors = []; /*tablica na błędy w formularzu*/    
    
    /*poniższa pętla służy wyłapaniu błędów w formularzu*/
    for (var i =0; i<fields.length; i++) {
        
    var field = fields[i];
    
        if(field.type==="text") {
          
            
            if(field.value==="") {
                
                 errors.push(field.dataset.error);
                 field.classList.add('error');
            }
        }
 
        else if (field.type==="email") {
            
            var reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i; /*wyrażenie regularne, na potrzeby nauki sprawdzamy mejla po naszej stronie, ale robimy to po stronie serwera!*/
            
            
            if (!reg.test(field.value)) 
                {
                    errors.push(field.dataset.error);
                    field.classList.add('error');

                }
            
    }
        
      
        else if (field.type==="select-one") {
            
            if (field.value==="")
                
                {
                
                 errors.push(field.dataset.error);
                 field.classList.add('error');
     
            }
          
        }
  
    }
       
        
         if(errors.length) {
             
    } else {
        form.submit();
    }
        

        
//    console.log(errors);
        
    },false);


})();




