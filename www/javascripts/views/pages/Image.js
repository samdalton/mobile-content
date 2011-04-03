$(function() {
    backbone.views.pages.Image = backbone.views.pages.Base.extend({
        
        render : function() {
            var values = this.render_values();
            values.image = this.page_data.content;
            return ich.image( values );
        }
        
    });
});