$(document).ready(function() {
    $('.sidebar').on("click", "a", function(){
        var cl = this.class;

        switch(cl){
            case "about-btn":
                $('#about-sec').attr('class', 'show about-me');
                $('#proj-sec').attr('class', 'hide proj-sec');
                break;
            case "proj-btn":
                $('#about-sec').attr('class', 'hide about-me');
                $('#proj-sec').attr('class', 'show proj-sec')
                break;
            case "resume":
                break;
        }
    });

});