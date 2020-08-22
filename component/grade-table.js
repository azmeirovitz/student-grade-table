
class GradeTable {
    constructor(tableElement) {
        this.data = tableElement;
        
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);

    }

updateGrades (grades) {
    console.log("grades: "), grades;
}



}