

$(function() {
    backbone.views.pages.Audio = backbone.views.pages.Base.extend({
        
        render : function() {
            _.bindAll(this, 'play', 'stop');
            $("a.play").live('click', this.play);
            $("a.stop").live('click', this.stop);
            return ich.audio( this.render_values() );
        },
        
        play : function(){
            this.media().play();
            return false;
        },
        
        stop : function() {
            this.media().stop();
            return false;
        },
        
        media : function() {
            if ((this.media_obj === null) || (this.media_obj === undefined)) {
                this.media_obj = new Media('audio/' + this.page_data.content);
            }
            return this.media_obj;
        }
        
    });
});