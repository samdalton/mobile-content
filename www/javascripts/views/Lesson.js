$(function() {
    backbone.views.Lesson = Backbone.View.extend({
        
        tagName : 'div',
        
        initialize : function(args) {
            this.lesson = args.lesson;
        },
        
        render : function() {
            exercises = _.map(this.lesson.exercises, function(exercise) {
                exercise.parent = this.lesson.title;
                exercise.back = this.lesson_id();
                ex = (new ExerciseLoader).load(exercise);
                base.append(ex.render()); 
                return {
                    exercise_id : ex.exercise_id(),
                    name : exercise.name
                };
            }, this);
            
            return ich.lesson({
                id : this.lesson_id(),
                title : this.lesson.title,
                exercises : exercises
            });
        },
        
        lesson_id : function() {
            return 'lesson-' + this.lesson.title;
        }
        
    });
});