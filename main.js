
$(document).ready(initializing);


function initializing () {

    var tableElement= document.querySelector("#tableBody");

    studentsGradeTable = new GradeTable(tableElement)
            
    studentsGrade = new App(studentsGradeTable)
        
    studentsGrade.start();    
     
}


