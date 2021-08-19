"use strict";
let inputValue; // Eingabe des Namen
let knowing; // Wissenstande bei Einstieg
let genders; // Geschlechterwahl
let pronoun; // Pronomen für Text
let outputFirst; // Ausgabe für Ausgangsituation
let evaluation; // Ausgabe für Kursverlauf
let java = "Java-Programmierung "; // Variable für erworbene Grundkenntnisse
let sap = "SAP ";
let nw = "IT-Infrastruktur, Virtualisierung ";
let pm = "Projektmanagement ";
let web = "Web-Entwicklung "

function buttonClick() {
    //Selection for Gendervariable
   function genderSelections() {  
    if (document.getElementById("myRadioButton1").checked) {
        genders = "Herr";
        return genders; 
    } 
    else if (document.getElementById("myRadioButton2").checked){
        genders = "Frau";
        return genders;
         
    }
    else if (document.getElementById("myRadioButton3").checked){
        genders = "Divers";
        return genders; 
    }
    else {
        alert("Wählen Sie bitte das Geschlecht");
    }      
}
    genders = genderSelections();

// Erzeugen der Textpronomen

    function pronounSelections() {  
        if (document.getElementById("myRadioButton1").checked) {
            pronoun = "ihm";
            return pronoun; 
        } 
        else if (document.getElementById("myRadioButton2").checked){
            pronoun = "ihr";
            return pronoun;
             
        }
        else if (document.getElementById("myRadioButton3").checked){
            pronoun = "Divers";
            return pronoun; 
        }
        else {
            alert("Wählen Sie bitte das Geschlecht");
        }      
    }
    pronoun = pronounSelections();

// Input for Namevariable

    function getName() {
    inputValue = document.getElementById("inputName").value;
    console.log(inputValue);
    return inputValue; 
    }

    inputValue = getName();


// Abfrage des Wissenstandes

    function knowledge(){
    if (document.getElementById("lowKnow").checked) {
        knowing = "keinem";
        console.log(knowing);
        return knowing;  
    } 
    else if (document.getElementById("medKnow").checked){
        knowing = "wenig";
        console.log(knowing);
        return knowing; 
    }
    else if (document.getElementById("highKnow").checked){
        knowing = "viel";
        console.log(knowing);
        return knowing; 
    }
    else {
        alert("Wählen Sie bitte das IT-Vorwissen aus");
    }      
    }
    knowing = knowledge();

    // Start der Ausgangssituation 
    function getStarted() {
        outputFirst = (genders +" "+ inputValue + " kam mit "+ knowing +" Vorwissen im Bereich Computer in den Kurs IT Orientierung, und hatte von Beginn an den Wunsch, den Bereich der IT näher kennen zu lernen und ev. als eigenes Berufsfeld für sich zu entdecken. Im Bewerbungsgespräch zeigte sich " + genders +" "+ inputValue + " ausgesprochen motiviert, weshalb " + pronoun +" vom TrainerInnenteam ein Kursplatz zugesagt wurde.");

        return outputFirst;

    }
  
    outputFirst = getStarted();
    

    // Start Kursverlauf
    
    function courseHistoryPos() {
        
        if (document.getElementById("positiveCoding").checked && genders == "Herr" ) {
            evaluation = "<div>" + genders + " " + inputValue +" war ein sehr lernbereiter, interessierter und ruhiger Kursteilnehmer. Er fand im Kurs stets ohne Aufforderung themenbezogene Tätigkeiten, sodass es nie zu einem Leerlauf kam. Herr Gomboc ist sehr motiviert, lernbereit und Interessiert an der IT, wodurch wir ihn als fähigen Kandidaten für die Folgeausbildung in der Programmierung in der Coders.Bay einschätzen.Generell erwarb Herr Gomboc Grundkenntnisse in der "+ java +","+ sap +","+ nw + ","+ pm + "und"+ web + ".</div>";
            
            return evaluation;
           
        } 
        else if (document.getElementById("positiveCoding").checked && genders == "Frau") {
            evaluation = "<div>" + genders + " " + inputValue +" war eine sehr lernbereite, interessierte und ruhige Kursteilnehmerin. Sie fand im Kurs stets ohne Aufforderung themenbezogene Tätigkeiten, sodass es nie zu einem Leerlauf kam. "+ genders + inputValue +" ist sehr motiviert, lernbereit und Interessiert an der IT, wodurch wir sie als fähigen Kandidaten für die Folgeausbildung in der Programmierung in der Coders.Bay einschätzen.Generell erwarb "+ genders + inputValue +" Grundkenntnisse in der JAVA-Programmierung, IT-Infrastruktur, Virtualisierung, in Projektmanagement und Web-Technologien.</div>";
            
            return evaluation;
        }
        else if (document.getElementById("positiveCodingWait").checked && genders == "Herr" ){
            evaluation = "<div>" +genders + " "+ inputValue +" war ein sehr lernbereiter, interessierter und ruhiger Kursteilnehmer. Er fand im Kurs stets ohne Aufforderung themenbezogene Tätigkeiten, sodass es nie zu einem Leerlauf kam. " +genders + " "+ inputValue +" ist sehr motiviert, lernbereit und interessiert an der IT, wodurch wir ihn als fähigen Kandidaten für die Folgeausbildung in der Programmierung in der Coders.Bay einschätzen. Generell erwarb " +genders + " "+ inputValue +" Grundkenntnisse in der JAVA-Programmierung, SAP, IT-Infrastruktur, Virtualisierung, in Projektmanagement und Web-Technologien.</div>"

            return evaluation;
        } 
        else if (document.getElementById("positiveCodingWait").checked && genders == "Frau" ){
            evaluation = "<div>" +genders + " "+ inputValue +" war eine sehr lernbereite, interessierte und ruhige Kursteilnehmerin. Sie fand im Kurs stets ohne Aufforderung themenbezogene Tätigkeiten, sodass es nie zu einem Leerlauf kam. " +genders + " "+ inputValue +" ist sehr motiviert, lernbereit und interessiert an der IT, wodurch wir sie als fähigen Kandidatin für die Folgeausbildung in der Programmierung in der Coders.Bay einschätzen. Generell erwarb " +genders + " "+ inputValue +" Grundkenntnisse in der JAVA-Programmierung, SAP, IT-Infrastruktur, Virtualisierung, in Projektmanagement und Web-Technologien.</div>"

            return evaluation;
        } 
        else if (document.getElementById("onholdHealth").checked && genders == "Herr" ){
            evaluation = "<div>" +genders + " "+ inputValue +" zeigte sich in allen Unterrichtsbereichen der IT-Orientierung als ausgesprochen motivierter und lernbereiter Teilnehmer. Er erledigte stets alle ihm gestellten Aufgaben in einer sehr strukturierten und selbstständigen Herangehensweise. Inputs durch das TrainerInnenteam konnte er schnell auf künftige Aufgabenstellungen übertragen und anwenden. Sein Interesse für Neues im Bereich der IT, insbesondere der Softwareentwicklung, ist immer vorhanden. Er vertiefte ohne Aufforderung der TrainerInnen auch außerhalb der Kurszeiten eigenständig sein erlerntes Wissen. Leider benötigte Herr Emich, je länger die Orientierungsmaßnahme dauerte, zunehmend länger für das Lösen der ihm gestellten Aufgaben. In mehrmaligem Feedbackgesprächen zwischen ihm, den TrainerInnen und dem begleitenden Coach der Orientierungsmaßnahme wurden hier die möglichen Hintergründe besprochen. Herr Emich schien sich zunehmend Druck bezüglich einer möglichen Aufnahme / seiner Zukunft zu machen, sodass der Lernerfolg in den letzten Wochen ausblieb. Da er sehr geeignet für die IT scheint, wurde er aus diesem Grund mehrmals verlängert, um ihm genug Zeit für die Lerninhalte und Aufgabenstellungen zu geben. Auch überlegte er aufgrund des enormen selbstauferlegten Drucks zwischendurch, die Orientierungsmaßnahme in der finalen Phase abzubrechen. Sowohl das TrainerInnenteam als auch Frau Feichtinger, unser Coach, schätzen diese Leistungsblockade nicht als fehlende fachliche Kompetenz, sondern als gesundheitliches Problem ein. Auch Herr Emich konnte diesen Eindruck bestätigen. Im Verlauf der IT-Orientierungsmaßnahme an der Coders.Bay erwarb Herr Emich Basiskenntnisse im Bereich der Java- und Web-Programmierung, Netzwerktechnik sowie Projektmanagement.</div>"

            return evaluation;
        } 
        else if (document.getElementById("onholdHealth").checked && genders == "Frau" ){
            evaluation = "<div>" + genders + " "+ inputValue +" zeigte sich in allen Unterrichtsbereichen der IT-Orientierung als ausgesprochen motivierte und lernbereite Teilnehmerin. Sie erledigte stets alle ihr gestellten Aufgaben in einer sehr strukturierten und selbstständigen Herangehensweise. Inputs durch das TrainerInnenteam konnte sie schnell auf künftige Aufgabenstellungen übertragen und anwenden. Ihr Interesse für Neues im Bereich der IT, insbesondere der Softwareentwicklung, ist immer vorhanden. Sie vertiefte ohne Aufforderung der TrainerInnen auch außerhalb der Kurszeiten eigenständig ihr erlerntes Wissen. Leider benötigte " +genders + " "+ inputValue +", je länger die Orientierungsmaßnahme dauerte, zunehmend länger für das Lösen der ihr gestellten Aufgaben. In mehrmaligem Feedbackgesprächen zwischen ihr, den TrainerInnen und dem begleitenden Coach der Orientierungsmaßnahme wurden hier die möglichen Hintergründe besprochen. " +genders + " "+ inputValue +" schien sich zunehmend Druck bezüglich einer möglichen Aufnahme / seiner Zukunft zu machen, sodass der Lernerfolg in den letzten Wochen ausblieb. Da sie sehr geeignet für die IT scheint, wurde sie aus diesem Grund mehrmals verlängert, um ihr genug Zeit für die Lerninhalte und Aufgabenstellungen zu geben. Auch überlegte sie aufgrund des enormen selbstauferlegten Drucks zwischendurch, die Orientierungsmaßnahme in der finalen Phase abzubrechen. Sowohl das TrainerInnenteam als auch unser Coach, schätzen diese Leistungsblockade nicht als fehlende fachliche Kompetenz, sondern als gesundheitliches Problem ein. Auch " +genders + " "+ inputValue +" konnte diesen Eindruck bestätigen. Im Verlauf der IT-Orientierungsmaßnahme an der Coders.Bay erwarb " +genders + " "+ inputValue +" Basiskenntnisse im Bereich der Java- und Web-Programmierung, Netzwerktechnik sowie Projektmanagement.</div>";

            return evaluation;
        } 
        else if (document.getElementById("negativeWork").checked && genders == "Herr" ){
            evaluation = "<div>" + genders + " "+ inputValue +" war ein lernbereiter, interessierter und hilfsbereiter Kursteilnehmer. Er versuchte stets die Inhalte schnell zu erfassen und in eigenen Aufgaben praktisch anzuwenden."  + genders + " "+ inputValue + "erwarb in der IT-Orientierungsmaßnahme Basiskenntnisse im Bereich Projektmanagement.  </div>";

            return evaluation;
        } 
        else if (document.getElementById("negativeWork").checked && genders == "Frau" ){
            evaluation = "<div>" + genders + " "+ inputValue +" war eine lernbereite, interessierte und hilfsbereite Kursteilnehmerin. Sie versuchte stets die Inhalte schnell zu erfassen und in eigenen Aufgaben praktisch anzuwenden."  + genders + " "+ inputValue + "erwarb in der IT-Orientierungsmaßnahme Basiskenntnisse im Bereich Projektmanagement.  </div>";

            return evaluation;
        } 
        else if (document.getElementById("negativeSelf").checked && genders == "Herr" ){
            evaluation = "<div>" + genders + " "+ inputValue +" war ein lernbereiter, interessierter und hilfsbereiter Kursteilnehmer. Er versuchte stets die Inhalte schnell zu erfassen und in eigenen Aufgaben praktisch anzuwenden. Inputs durch das TrainerInnenteam konnte er stets auf künftige Aufgabenstellungen übertragen. Frau Mittendorfer benötigt für die Vertiefung der IT-Inhalte etwas länger, wodurch sie die im Kursverlauf gestellten Aufgaben nur teilweise lösen konnte."  + genders + " "+ inputValue + " erwarb in der IT-Orientierungsmaßnahme Basiskentnisse im Bereich der JAVA-Programmierung.</div>";

            return evaluation;
        } 
        else if (document.getElementById("negativeSelf").checked && genders == "Frau" ){
            evaluation = "<div>" + genders + " "+ inputValue +" war eine lernbereite, interessierte und hilfsbereite Kursteilnehmerin. Sie versuchte stets die Inhalte schnell zu erfassen und in eigenen Aufgaben praktisch anzuwenden. Inputs durch das TrainerInnenteam konnte sie stets auf künftige Aufgabenstellungen übertragen. "  + genders + " "+ inputValue + " benötigt für die Vertiefung der IT-Inhalte etwas länger, wodurch sie die im Kursverlauf gestellten Aufgaben nur teilweise lösen konnte. Frau Mittendorfer erwarb in der IT-Orientierungsmaßnahme Basiskentnisse im Bereich der JAVA-Programmierung.</div>";

            return evaluation;
        }
        else if (document.getElementById("negativeLang").checked && genders == "Herr" ){
            evaluation = "<div>" + genders + " "+ inputValue +" war ein hilfsbereiter und interessierter Kursteilnehmer. Im Kursbetrieb stellte sich jedoch sehr schnell heraus, dass er häufig dem Unterricht, möglicherweise aufgrund einer Sprachbarriere, nicht folgen konnte. Trotz mehrmaligen Erklärungsversuchen konnte " + genders + " "+ inputValue +" viele der ihm gestellten Aufgaben und Inhalte nicht oder nur teilweise umsetzen. Eine ausreichende Beurteilung seiner Eignung im Berufsbild der IT ist zum derzeitigen Punkt daher nicht möglich. Durch die IT-nahe Orientierung unserer Kursmaßnahme und die dementsprechende Dichte des Lerninhaltes, ist eine Fortsetzung nicht sinnvoll. </div>";

            return evaluation;
        } 
        else if (document.getElementById("negativeLang").checked && genders == "Frau" ){
            evaluation = "<div>" + genders + " "+ inputValue +" war eine hilfsbereite und interessierte Kursteilnehmerin. Im Kursbetrieb stellte sich jedoch sehr schnell heraus, dass sie häufig dem Unterricht, möglicherweise aufgrund einer Sprachbarriere, nicht folgen konnte. Trotz mehrmaligen Erklärungsversuchen konnte F" + genders + " "+ inputValue +" viele der ihr gestellten Aufgaben und Inhalte nicht oder nur teilweise umsetzen. Eine ausreichende Beurteilung ihrer Eignung im Berufsbild der IT ist zum derzeitigen Punkt daher nicht möglich. Durch die IT-nahe Orientierung unserer Kursmaßnahme und die dementsprechende Dichte des Lerninhaltes, ist eine Fortsetzung nicht sinnvoll. </div>";

            return evaluation;
        }  
        else if (document.getElementById("negativeImpl").checked && genders == "Herr" ){
            evaluation = "<div>" + genders + " "+ inputValue +" zeigte sich im Zuge der IT-Orientierungsmaßnahme als sehr lern- sowie hilfsbereiter Teilnehmer. Er versuchte stets alle ihm gestellten Aufgaben in einer selbstständigen und strukturierten Herangehensweise zu lösen. Inputs durch das TrainerInnenteam konnte er teilweise gut auf künftige Aufgabenstellungen übertragen und anwenden. Sein Interesse für Neues im Bereich der IT ist meist vorhanden. " + genders + " "+ inputValue +" benötigte im Zuge der IT-Orientierungsmaßnahme häufig länger, um die ihm gestellten Aufgaben lösen zu können. Aus diesem Grund vertiefte er häufig ohne Aufforderung der TrainerInnen auch außerhalb der Kurszeiten sein erlerntes Wissen.Im Verlauf der IT-Orientierungsmaßnahme an der Coders.Bay erwarb " + genders + " "+ inputValue +" Basiskenntnisse im Bereich der Java- und Web-Programmierung, SAP, Netzwerktechnik sowie Projektmanagement.</div>";

            return evaluation;
        } 
        else if (document.getElementById("negativeImpl").checked && genders == "Frau" ){
            evaluation = "<div>" + genders + " "+ inputValue +" zeigte sich im Zuge der IT-Orientierungsmaßnahme als sehr lern- sowie hilfsbereite Teilnehmerin. Sie versuchte stets alle ihr gestellten Aufgaben in einer selbstständigen und strukturierten Herangehensweise zu lösen. Inputs durch das TrainerInnenteam konnte sie teilweise gut auf künftige Aufgabenstellungen übertragen und anwenden. Ihr Interesse für Neues im Bereich der IT ist meist vorhanden. " + genders + " "+ inputValue +" benötigte im Zuge der IT-Orientierungsmaßnahme häufig länger, um die ihr gestellten Aufgaben lösen zu können. Aus diesem Grund vertiefte sie häufig ohne Aufforderung der TrainerInnen auch außerhalb der Kurszeiten ihr erlerntes Wissen.Im Verlauf der IT-Orientierungsmaßnahme an der Coders.Bay erwarb " + genders + " "+ inputValue +" Basiskenntnisse im Bereich der Java- und Web-Programmierung, SAP, Netzwerktechnik sowie Projektmanagement.</div>";

            return evaluation;
        } 
        else if (document.getElementById("negative").checked && genders == "Herr" ){
            evaluation = "<div>" + genders + " "+ inputValue +" zeigte sich im Zuge der IT-Orientierungsmaßnahme als extrem lern- sowie hilfsbereiter Teilnehmer. Er versuchte stets alle ihm gestellten Aufgaben in einer selbstständigen und strukturierten Herangehensweise zu lösen. Inputs durch das TrainerInnenteam konnte er teilweise gut auf künftige Aufgabenstellungen übertragen und anwenden. Sein Interesse für Neues im Bereich der IT ist immer vorhanden. " + genders + " "+ inputValue +" benötigte im Zuge der IT-Orientierungsmaßnahme sehr häufig länger, um die ihm gestellten Aufgaben lösen zu können. Aus diesem Grund vertiefte er häufig ohne Aufforderung der TrainerInnen auch außerhalb der Kurszeiten sein erlerntes Wissen. Logisch komplexere Aufgabenstellungen fielen ihm in der Orientierungsmaßnahme jedoch häufig schwer. " + genders + " "+ inputValue +" hat eine extrem introvertierte Persönlichkeit. Auch fiel es ihm, je länger die Orientierungsmaßnahme andauerte, zunehmend schwerer, den Inhalten des TrainerInnenteams auf Anhieb folgen zu können. Es ist deutlich erkennbar, dass er lernen möchte, jedoch scheint das sehr herausfordernde Berufsfeld der IT für ihn nicht geeignet zu sein. Im Verlauf der IT-Orientierungsmaßnahme an der Coders.Bay erwarb " + genders + " "+ inputValue +" Basiskenntnisse im Bereich der Java- und Web-Programmierung, Netzwerktechnik sowie Projektmanagement.</div>";

            return evaluation;
        
        } else if(document.getElementById("negative").checked && genders == "Frau" ){
            evaluation = "<div>" + genders + " "+ inputValue +" zeigte sich im Zuge der IT-Orientierungsmaßnahme als extrem lern- sowie hilfsbereite Teilnehmerin. Sie versuchte stets alle ihr gestellten Aufgaben in einer selbstständigen und strukturierten Herangehensweise zu lösen. Inputs durch das TrainerInnenteam konnte sie teilweise gut auf künftige Aufgabenstellungen übertragen und anwenden. Ihr Interesse für Neues im Bereich der IT ist immer vorhanden. " + genders + " "+ inputValue +" benötigte im Zuge der IT-Orientierungsmaßnahme sehr häufig länger, um die ihm gestellten Aufgaben lösen zu können. Aus diesem Grund vertiefte sie häufig ohne Aufforderung der TrainerInnen auch außerhalb der Kurszeiten ihr erlerntes Wissen. Logisch komplexere Aufgabenstellungen fielen ihr in der Orientierungsmaßnahme jedoch häufig schwer. " + genders + " "+ inputValue +" hat eine extrem introvertierte Persönlichkeit. Auch fiel es ihr, je länger die Orientierungsmaßnahme andauerte, zunehmend schwerer, den Inhalten des TrainerInnenteams auf Anhieb folgen zu können. Es ist deutlich erkennbar, dass sie lernen möchte, jedoch scheint das sehr herausfordernde Berufsfeld der IT für sie nicht geeignet zu sein. Im Verlauf der IT-Orientierungsmaßnahme an der Coders.Bay erwarb " + genders + " "+ inputValue +" Basiskenntnisse im Bereich der Java- und Web-Programmierung, Netzwerktechnik sowie Projektmanagement.</div>";

            return evaluation;
        } 
       
        
       
    }
    
    evaluation = courseHistoryPos();

    document.write(outputFirst,evaluation )
    
}