
$(document).ready(initializing);

// var tableElement;
// var studentsGradeTable;

function initializing () {

    var tableElement= document.querySelector("#tableBody");

    var pTag = document.querySelector("#p_tag");
    var studentsGradeTable = new GradeTable(tableElement, pTag)


    var header = document.querySelector(".header");
    var pageHeader = new PageHeader(header)

    var formElement = document.querySelector(".formElement");
    var theForm = new GradeForm(formElement)
            
    var studentsGrade = new App(studentsGradeTable, pageHeader, theForm)
        
    studentsGrade.start();    
     
}


