$(document).ready(function () {

    $('#quiz-title a').click(function () {

        const selected_quiz_name = $(this).data('quiz-name');

        localStorage.setItem('quiz-name', selected_quiz_name);

    });

    $('.navbar-link:eq(0)').click(function () {
        $('#search-bar').show('2000');
        $('#search-txt').hide('2000');
    });

    $('#search-bar').blur(function () {
        $(this).hide('2000');
        $('#search-txt').show('2000');
    });
});

var myApp = angular.module('myApp', []);

myApp.controller('QuizController', function QuizController($scope) {
    $scope.quizzes = [{
            sno: '1',
            quiz_id: 'intro_quiz',
            quiz_title: 'Intro Quiz',
            total_ques: '5'
        },
        {
            sno: '2',
            quiz_id: 'asia_quiz',
            quiz_title: 'All About Asia Quiz ',
            total_ques: '15'
        },
        {
            sno: '3',
            quiz_id: 'art_quiz',
            quiz_title: 'Ultimate Art Quiz',
            total_ques: '10'
        },
        {
            sno: '4',
            quiz_id: 'w_and_d_quiz',
            quiz_title: 'Wining & Dining Quiz',
            total_ques: '9'
        },
        {
            sno: '5',
            quiz_id: 'bird_quiz',
            quiz_title: 'Predatory Birds Quiz',
            total_ques: '6'
        },
        {
            sno: '6',
            quiz_id: 'p_table_quiz',
            quiz_title: 'The Periodic Table Quiz',
            total_ques: '15'
        },
        {
            sno: '7',
            quiz_id: 'geo_quiz',
            quiz_title: 'The Map Quiz',
            total_ques: '15'
        },
        {
            sno: '8',
            quiz_id: 'misconcept_t_or_f',
            quiz_title: 'True or False: Famous Misconceptions Quiz',
            total_ques: '8'
        },
        {
            sno: '9',
            quiz_id: 'history_of_war',
            quiz_title: 'History Of War',
            total_ques: '10'
        },
        {
            sno: '10',
            quiz_id: 'moons_quiz',
            quiz_title: 'Moons Quiz',
            total_ques: '7'
        }
    ];
});