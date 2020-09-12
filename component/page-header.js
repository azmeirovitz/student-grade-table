class PageHeader {
    constructor (headerElement) {
        this.headerElement = headerElement        
    }

    updateAverage (newAverage) {

          
        var badge = this.headerElement.querySelector("#spanBadge");

        badge.innerHTML ="";
        
        var averageContent = document.createTextNode(newAverage);        

        badge.appendChild(averageContent);

    }



















}