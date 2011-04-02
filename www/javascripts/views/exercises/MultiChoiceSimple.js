$(function() {
    backbone.views.exercises.MultiChoiceSimple = backbone.views.exercises.Base.extend({
        
        render : function() {
            var values = this.render_values();
            values.questions = this.exercise_data.content.questions;
            
            // add in id references to make dom work easier
            for (var i = 0, count = values.questions.length; i < count; i++){
                values.questions[i].id = i;
                for (var j = 0, count2 = values.questions[i].answers.length; j < count2; j++){
                    values.questions[i].answers[j].id = j;
                    values.questions[i].answers[j].question_id = i;
                };
            };
            
            return ich.multichoicesimple( values );
        }
        
    });
});



/*

questions: [
    {
        question: 'The topic is',
        answers: [
        {
            text: 'Children and education in general',
            correct: false
        },
        {
            text: 'The best age for children to start school',
            correct: true
        },
        {
            text: 'Formal early childhood education',
            correct: false
        }
        ]
    },
    {
    question: 'In this essay the instruction is to',
    answers: [
    {
        text: 'discuss advantages and disadvantages of something.',
        correct: false
    },
    {
        text: 'suggest what should be done about something in the future.',
        correct: false
    },
    {
        text: 'give your personal opinion about something and support this with reasons.',
        correct: true
    },
    {
        text: 'give your personal opinion about something.',
        correct: false
    },
    {
        text: 'say whether you agree or disagree with a statement or opinion.',
        correct: false
    }
    ]
}
]*/