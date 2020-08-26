class App {
    constructor(gradeTable) {
        this.gradeTable = gradeTable;
        
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);

    }


    handleGetGradesError(error) {
        console.error(error);
    }

    handleGetGradesSuccess(grades) {
        console.log("grades: ", grades);

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
