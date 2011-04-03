$(function() {
    backbone.views.Lesson = Backbone.View.extend({
        
        tagName : 'div',
        
        initialize : function(args) {
            this.lesson = args.lesson;
        },
        
        render : function() {
            pages = _.map(this.lesson.pages, function(page) {
                page.parent = this.lesson.title;
                page.back = this.lesson_id();
                ex = (new PageLoader).load(page);
                base.append(ex.render()); 
                return {
                    page_id : ex.page_id(),
                    name : page.name
                };
            }, this);
            
            return ich.lesson({
                id : this.lesson_id(),
                title : this.lesson.title,
                pages : pages
            });
        },
        
        lesson_id : function() {
            return 'lesson-' + this.lesson.title;
        }
        
    });
});