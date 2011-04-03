$(function() {
    backbone.views.pages.HTML = backbone.views.pages.Base.extend({
        
        render : function() {
            var values = this.render_values();
            values.body = this.page_data.content;
            return ich.html( values );
        }
        
    });
});