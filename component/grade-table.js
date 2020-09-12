
class GradeTable {
    constructor(tableElement, noGradeElement) {
        this.tableElement = tableElement;
        this.noGradeElement = noGradeElement;        
    }

    updateGrades (grades) {
        console.log("grades: ", grades);

        this.tableElement.innerHTML ="";
        //this.tableElement.empty();

        this.renderGradeRow(grades, this.deleteGrade);

        for (var i=0; i<grades.length; i++) {
            var pElement = this.noGradeElement;
    
            if (grades.length > 0) {
                pElement.className += "d-done"
            } else {
                pElement.classList.remove("d-done")
            }            
    
        }
    }


        onDeleteClick (deleteGrade){
            this.deleteGrade = deleteGrade;
        }


        renderGradeRow(data, deleteGrade) {

            for (var i=0; i<data.length; i++) {
    
                var $tr = document.createElement("tr");
    
                //var gradesItem = grades[i];
                var gradesItem = data[i];
    
                var $tdName = document.createElement("td");
                var $tdNameText = document.createTextNode(gradesItem.name);
                $tdName.appendChild($tdNameText);

                var $tdCourse = document.createElement("td");
                var $tdCourseText = document.createTextNode(gradesItem.course);
                $tdCourse.appendChild($tdCourseText);

                var $tdGrade = document.createElement("td");
                var $tdGradeText = document.createTextNode(gradesItem.grade);
                $tdGrade.appendChild($tdGradeText);
    
                // $tr.append($tdName, $tdCourse, $tdGrade);

                var $tdDelete = document.createElement("td");
                var $tdDeleteButton = document.createElement("button");
                $tdDeleteButton.textContent = "Delete";
                $tdDeleteButton.className = "btn btn-primary";
                $tdDeleteButton.addEventListener('click', function() { deleteGrade(gradesItem.id);
                });
    
                
    
                $tdDelete.appendChild($tdDeleteButton);
                $tr.append($tdName, $tdCourse, $tdGrade, $tdDelete);
                this.tableElement.appendChild($tr);

                           
            

        }
                    
    }

}
        