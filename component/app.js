
class App {
    constructor(gradeTable) {
        this.data = gradeTable;
        
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

       

        // url: `/api/grades/json`,
        method: "GET",
        dataType: "json",
        // data: {
        //     key: GOOGLE_API_KEY,
        //     placeid: this.data.place_id
        // },
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
