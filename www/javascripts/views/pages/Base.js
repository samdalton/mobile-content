$(function() {
    backbone.views.pages.Base = Backbone.View.extend({
        
        initialize : function(args) {
            _.bindAll(this, 'show_info');
            
            this.page_data = args.page_data;            
            
            $(".show-info-" + this.page_id()).live('click', this.show_info);
        },
        
        page_id : function(){
            return 'page-' + this.page_data.parent + '-' + this.page_data.name.split(/ /).join('');
        },
        
        render_values : function() {
            var values =  {
              back : this.page_data.back,
              title : this.page_data.name,
              id : this.page_id()  
            };
            
            if (this.page_data.info !== undefined) {
                values.info = true;
            }
            
            return values;
        },
        
        show_info : function() {
            (new backbone.views.Info({ content : this.page_data.info, back : this.page_id() })).render();
            return false;
        }
        
    });
});