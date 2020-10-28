$(document).ready(function () {

    $('#quiz-title a').click(function () {
        
        const selected_quiz_name = $(this).data('quiz-name');

        localStorage.setItem('quiz-name', selected_quiz_name);

    });


});