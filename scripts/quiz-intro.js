document.addEventListener('DOMContentLoaded', function () {

    var displayed_quiz_name = document.getElementsByClassName('m-cont-text-2')[0];

    switch(localStorage.getItem('quiz-name').toString()) {

        case "intro_quiz": displayed_quiz_name.textContent = "Introductory Quiz";
                            break;
        
        case "asia_quiz": displayed_quiz_name.textContent = "All About Asia Quiz";
        break;

        case "art_quiz": displayed_quiz_name.textContent = "Ultimate Art Quiz";
        break;

        case "w_and_d_quiz": displayed_quiz_name.textContent = "Wining & Dining Quiz";
        break;

        case "bird_quiz": displayed_quiz_name.textContent = "Predatory Birds Quiz";
        break;

        case "p_table_quiz": displayed_quiz_name.textContent = "The Periodic Table Quiz";
        break;

        case "geo_quiz": displayed_quiz_name.textContent = "The Map Quiz";
        break;

        case "misconcept_t_or_f": displayed_quiz_name.textContent = "Famous Misconceptions";

        break;

        case "history_of_war": displayed_quiz_name.textContent = "History Of War";
        break;

        case "moons_quiz": displayed_quiz_name.textContent = "Moons Quiz";
        break;


    }


});