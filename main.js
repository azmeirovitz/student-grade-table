
$(document).ready(initializing);

// var tableElement;
// var studentsGradeTable;

function initializing () {

    var tableElement= document.querySelector("#tableBody");

    var studentsGradeTable = new GradeTable(tableElement)


    var header = document.querySelector(".header");
    var pageHeader = new PageHeader(header)

            
    var studentsGrade = new App(studentsGradeTable, pageHeader)
        
    studentsGrade.start();    
     
}


