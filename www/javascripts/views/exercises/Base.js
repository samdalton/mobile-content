$(function() {
    backbone.views.exercises.Base = Backbone.View.extend({
        
        initialize : function(args) {
            _.bindAll(this, 'show_info');
            
            this.exercise_data = args.exercise_data;            
            
            $(".show-info-" + this.exercise_id()).live('click', this.show_info);
        },
        
        exercise_id : function(){
            return 'exercise-' + this.exercise_data.parent + '-' + this.exercise_data.name.split(/ /).join('');
        },
        
        render_values : function() {
            var values =  {
              back : this.exercise_data.back,
              title : this.exercise_data.name,
              id : this.exercise_id()  
            };
            
            if (this.exercise_data.info !== undefined) {
                values.info = true;
            }
            
            return values;
        },
        
        show_info : function() {
            (new backbone.views.Info({ content : this.exercise_data.info, back : this.exercise_id() })).render();
            return false;
        }
        
    });
});