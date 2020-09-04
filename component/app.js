class App {
    constructor(gradeTable, pageHeader, gradeForm) {
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
        
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);

        this.createGrade = this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);

    }


    handleGetGradesError(error) {
        console.error(error);
    }

    handleGetGradesSuccess(grades) {
        console.log("grades: ", grades);
        var addedGrades= 0;
        var oneGrade;
        var average;
        var counter;

        for (var i=0; i<grades.length; i++) {
              
            var studentGrade = grades[i];
            oneGrade = studentGrade.grade;
            addedGrades = addedGrades + oneGrade;
            counter = i+1;
            average = addedGrades / counter;

        }
        
        this.pageHeader.updateAverage(average);

        this.gradeTable.updateGrades(grades);
    }

    getGrades () {
    
        var ajaxOptions = {
        url: "https://sgt.lfzprototypes.com/api/grades",
        method: "GET",
        dataType: "json",        
        headers: {
            "X-Access-Token": "944Roegi"
        },
        success: this.handleGetGradesSuccess,
        error: this.handleGetGradesError
    };

        return $.ajax(ajaxOptions);
    }

    handleCreateGradeSuccess(){
        this.getGrades();
    }


    handleCreateGradeError() {
        console.error(error);
    }

    createGrade (name, course, grade) {
       console.log("in createGrade", "name: ", name, "course: ", course, "grade: ", grade);
        
       var ajaxOptions = {
            url: "https://sgt.lfzprototypes.com/api/grades",
            method: "POST",
            data:
            { 
                "name": name,
                "course": course,
                "grade" : grade
            },            
            dataType: "json",        
            headers: {
                "X-Access-Token": "944Roegi"
            },
            success: this.handleCreateGradeSuccess,
            error: this.handleCreateGradeError
        };
    
            return $.ajax(ajaxOptions);
    }

    start() {
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade)
        //this.gradeTable.onSubmit(this.createGrade)
    }

    // start (name, course, grade) {
    //     console.log("in start", "name: ", name, "course: ", course, "grade: ", grade);
    //     this.gradeForm.onSubmit(name, course, grade); //??
    //     //this.onSubmit
    // }
}
