
//Ré-écris ce code en javascript en utilisant des IF/ELSE etc. 
//Puis en utilisant un switch case.
    /*    let tmp = 15; 

        if (tmp < 0){   
            console.log("Freezing weather.");
        } else if (tmp < 10) {
            console.log("Very cold weather.");
        }else if (tmp < 20)  {
            console.log("Cold weather.");   
        }else if (tmp < 30) {
            console.log("Normal in temp."); 
        }else if (tmp < 40) {  
            console.log("Its Hot."); 
        } else { 
           console.log("Its very hot.");
        } */


        let tmp = 15; 

       switch(true) {
            case (tmp < 0):
            console.log("Freezing weather.");
                break;
             case (tmp < 10):
            console.log("Very cold weather.");
                break;
            case (tmp < 20) :
            console.log("Cold weather.")
                break;  
            case (tmp < 30) :
            console.log("Normal in temp.")
                break;
            case (tmp < 40):
            console.log("Its Hot.")
                break;
            default:
            console.log("Its very hot.") 
            
        }