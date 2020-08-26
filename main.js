
$(document).ready(initializing);


var studentsGrade;

var studentsGradeTable;

function initializing () {

    var tableElement= document.querySelector("#tableBody");

    studentsGradeTable = new GradeTable(tableElement)
            
    studentsGrade = new App(studentsGradeTable)
        //gradeTableInstance: studentsGradeTable
    

    studentsGrade.start();
    
     
}


