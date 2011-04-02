$(function() {
    backbone.views.exercises.Introduction = backbone.views.exercises.Base.extend({
        
        render : function() {
            var values = this.render_values();
            values.body = this.exercise_data.content;
            return ich.introduction( values );
        }
        
    });
});