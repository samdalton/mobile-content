// credit to http://stackoverflow.com/questions/3216892/dynamic-object-creation

function ExerciseLoader() {}
ExerciseLoader.prototype = {
    load : function(exercise) {
        var current, parts, constructorName;
        name =  'backbone.views.exercises.' + exercise.type;
        parts = name.split('.');
        constructorName = parts[parts.length - 1];
        current = window;
        for (var i = 0; i < parts.length - 1; i++) {
            current = current[parts[i]];
        }

        if (current[constructorName] != null) {
             return new current[constructorName]({ exercise_data : exercise });
        } else {
            return new current['MissingExercise']();
        }
    }
};
