$(function() {
    backbone.views.Application = Backbone.View.extend({
        
        initialize : function(args) {                
            this.lessons = _.map(args.lessons, function(lesson) {
                return new backbone.views.Lesson({
                    lesson : lesson
                });
            });
            this.render();
        },
        
        render : function() {
            lesson_titles = []; // collect lesson titles here
            
            _.each(this.lessons, function(lesson) {
               this.el.append(lesson.render()); 
               lesson_titles.push({ id : lesson.lesson_id(), title : lesson.lesson.title });
            }, this);
            
            this.el.prepend(ich.home({lesson_titles : lesson_titles}));
        }
    });
});