
class GradeForm {
    constructor (formElement) {
        this.formElement = formElement 
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListener('submit', this.handleSubmit);
    }

    onSubmit (createGrade) {
        this.createGrade = createGrade;        
    }

    handleSubmit (event) {
        event.preventDefault();
        console.log ("handleSubmit was activated")

        
        var formData = new FormData(event.target); //The target is the input from the form element, the event is the click submit

        var name = formData.get("name");
        var course = formData.get("course");
        var grade = formData.get("grade");

        this.createGrade(name, course, grade);

        this.formElement.reset();

    }

}
