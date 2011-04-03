$(function() {
    backbone.views.Application = Backbone.View.extend({
        
        initialize : function(args) {                
            this.pages = _.map(args.pages, function(page) {
                return new backbone.views.Page({
                    page : page
                });
            });
            this.render();
        },
        
        render : function() {
            page_titles = []; // collect lesson titles here
            
            _.each(this.pages, function(page) {
               this.el.append(page.render()); 
               page_titles.push({ id : page.page_id(), title : page.page.title });
            }, this);
            
            this.el.prepend(ich.home({page_titles : page_titles}));
        }
    });
});