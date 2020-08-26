
class GradeTable {
    constructor(tableElement) {
        this.tableElement = tableElement;        
    }

    updateGrades (grades) {
        console.log("grades: ", grades);

        this.tableElement.innerHTML ="";
        //this.tableElement.empty();


        for (var i=0; i<grades.length; i++) {

            var $tr = document.createElement("tr");
            
            var gradesItem = grades[i];

            var $tdName = document.createElement("td");
            var $tdNameText = document.createTextNode(gradesItem.name);
            $tdName.appendChild($tdNameText);

            var $tdCourse = document.createElement("td");
            var $tdCourseText = document.createTextNode(gradesItem.course);
            $tdCourse.appendChild($tdCourseText);

            var $tdGrade = document.createElement("td");
            var $tdGradeText = document.createTextNode(gradesItem.grade);
            $tdGrade.appendChild($tdGradeText);

            $tr.append($tdName, $tdCourse, $tdGrade);

            this.tableElement.appendChild($tr);
            


            // var $tdName = $("<td>", {
            //     class: "tdName",
            //     text: grades.name[i]
            // })

            // var $tCourse = $("<td>", {
            //     class: "tdCourse",
            //     text: grades.course[i]
            // })

            // var $tdGrade = $("<td>", {
            //     class: "tdGrade",
            //     text: grades.grade[i]
            // })           

        }

    }

}