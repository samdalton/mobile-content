var backbone = {
    models : {},
    views : {
        pages : {}
    },
    collections : {}
}, base;

$(function() {
    
    base = $("#base");
    mainApp = new backbone.views.Application( {el : base, pages : page_data } );
    
});