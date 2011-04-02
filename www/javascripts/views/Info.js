$(function() {
    backbone.views.Info = Backbone.View.extend({
        
        el : $("#info"),
        
        initialize : function(args) {
            _.bindAll(this, 'hide');
            
            this.content = args.content;
            this.back = args.back;
            
            this.el.find('a.close').live('click', this.hide);
        },
        
        render : function() {
            this.el.find('.content .contents').html(this.content);
            this.show();
        },
        
        show : function(){
            $.mobile.changePage("#info", 'pop', false, true);
        },
        
        hide : function(){
            $.mobile.changePage('#' + this.back, 'pop', true, true);
            return false;
        }
    
        
    });
});