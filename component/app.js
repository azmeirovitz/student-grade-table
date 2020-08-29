class App {
    constructor(gradeTable, pageHeader) {
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);

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

    start () {
        this.getGrades();
    }
}
