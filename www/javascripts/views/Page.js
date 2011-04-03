$(function() {
    backbone.views.Page = Backbone.View.extend({
        
        tagName : 'div',
        
        initialize : function(args) {
            this.page = args.page;
        },
        
        render : function() {
            pages = _.map(this.page.subpages, function(page) {
                page.parent = this.page_title();
                page.back = this.page_id();
                ex = (new PageLoader).load(page);
                base.append(ex.render()); 
                return {
                    subpage_id : ex.page_id(),
                    name : page.name
                };
            }, this);
            
            return ich.page({
                id : this.page_id(),
                title : this.page.title,
                subpages : pages
            });
        },
        
        page_id : function() {
            return 'page-' + this.page_title();
        },
        
        page_title : function() {
            return this.page.title.split(/ /).join('');
        }
        
    });
});