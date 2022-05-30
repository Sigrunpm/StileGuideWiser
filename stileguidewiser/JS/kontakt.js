//Cecilies JS
//alert("HELLO WORLD!");

//Variablerne defineres herunder - hentet fra DOM ved brug af getElementById - retunerer objektet med id'et ( fx navn)
    let navn = document.getElementById("navn");
    let mail = document.getElementById("mail");
    let tlf = document.getElementById("tlf");
    let emne = document.getElementById("emne");
    let besked = document.getElementById("besked");
    let error = document.getElementById("error");

//Her bliver arrays'ne defineret i forbindelse med en variabel/i en variabel
    let borderColors = ["2px solid red", "1px solid green"];
    let errorMessages = ["Udfyld venligst alle oplysninger", "Mail, telefon, emne og besked mangler", "Telefon, emne og besked mangler", "Emne og besked mangler", "Besked mangler", "Din besked er sendt"];
    let colors = ["red", "black"];

//Sørger for, at koden først bliver læst, når der trykkes på knappen "send"
    function check(){
        //Herunder er kontrolstruktur - if else
        //if-statements eksekverer en kode, afhængig af betingelsen - hvis if statement er lig med 0 (hvis de ikke er udfyldt), udskriver den koden under går den videre til else if - dette gøres ved hjælp af boolske operatorer (== lig med, != Ikke lig med)
        if(navn.value.length ==0 && mail.value.length ==0 && tlf.value.length ==0 && emne.value.length ==0 && besked.value.length ==0){
            //følgende kalder på arrayet ovenover - herunder henter den 0-værdi'en
            navn.style.border = borderColors[0];
            mail.style.border = borderColors[0];
            tlf.style.border = borderColors[0];
            emne.style.border = borderColors[0];
            besked.style.border = borderColors[0];
            error.style.color = colors[0];
            error.innerHTML = errorMessages[0];
        }
        //else-if-statements eksekverer et bestemt stykke kode, afhængig af, om indholdet er delvist sandt eller ej - det er defineret i else-fi()
        else if (navn.value.length !=0 && mail.value.length ==0 && tlf.value.length==0 && emne.value.length ==0 && besked.value.length ==0){
            error.innerHTML = errorMessages[1];
            error.style.color = colors[0];
            
        }

        else if(navn.value.length !=0 && mail.value.length !=0 && tlf.value.length ==0 && emne.value.length ==0 && besked.value.length ==0){
            error.innerHTML = errorMessages[2];
            error.style.color = colors[0];
           
        }
        else if(navn.value.length !=0 && mail.value.length !=0 && tlf.value.length !=0 && emne.value.length ==0 && besked.value.length ==0){
            error.innerHTML = errorMessages[3];
            error.style.color = colors[0];
            
        }
        else if(navn.value.length !=0 && mail.value.length !=0 && tlf.value.length !=0 && emne.value.length !=0 && besked.value.length ==0){
            error.innerHTML = errorMessages[4];
            error.style.color = colors[0];
          
        }
        else if(navn.value.length !=0 && mail.value.length !=0 && tlf.value.length !=0 && emne.value.length !=0 && besked.value.length == true){
            error.innerHTML = errorMessages[5];
            error.style.color = colors[1];
            navn.style.border = borderColors[1];
            mail.style.border = borderColors[1];
            tlf.style.border = borderColors[1];
            emne.style.border = borderColors[1];
            besked.style.border = borderColors[1];
            
        }
    //Kører console.log, så hvis intet virker, kan det ses i "undersøg/inspect"
        else{
            console.log("Det virker overhovedet ikke")
        }
    }
    //Herunder er også kontrolstruktur - loop
    //for-loop som fortæller, at i = 0. Det betyder, at så længe i er mindre end array'et "errorMessages", så vil loopet altid blive plusset med 1 - i++
    //Den vil derfor console-log med errorMessage [i], afhængig af, hvad der er udfyldt, og så +1 - kører igen og igen (loop)
    for (i = 0; i < errorMessages.length; i++){
        console.log(errorMessages[i])
    }
    //Sørger for at siden ikke re-loader hver gang man trykker "send"
    const form = document.getElementById("form-contact");
    function handleform(event){
        console.log("no-reload")
        event.preventDefault();
    }
    //Event som sender beskeden via knappen, som har type "submit"
    form.addEventListener('submit', handleform);
//Cecilies JS slut

