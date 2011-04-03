// credit to http://stackoverflow.com/questions/3216892/dynamic-object-creation

function PageLoader() {}
PageLoader.prototype = {
    load : function(page) {
        var current, parts, constructorName;
        name =  'backbone.views.pages.' + page.type;
        parts = name.split('.');
        constructorName = parts[parts.length - 1];
        current = window;
        for (var i = 0; i < parts.length - 1; i++) {
            current = current[parts[i]];
        }

        if (current[constructorName] != null) {
             return new current[constructorName]({ page_data : page });
        } else {
            return new current['MissingPage']();
        }
    }
};
