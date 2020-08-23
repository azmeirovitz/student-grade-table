
$(document).ready(initializing);


//var studentsGrade;

//var studentsGradeTable;

function initializing () {

// var tableElement= document.createElement("#table1");

    var tableElement= document.querySelector("#tableBody");

    studentsGradeTable = new GradeTable(tableElement)
        // table: "#table1"
        //table: tableElement

    
    studentsGrade = new App(studentsGradeTable)
        //gradeTableInstance: studentsGradeTable
    

    studentsGrade.start();
    
     
}


