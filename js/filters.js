app.filter('capitalize', [
    function() {
        return function(input, scope) {
            //console.log(input);
            if (input != undefined) {
                return input.substring(0, 1).toUpperCase() + input.substring(1);
            } else {
                return '';
            }
        }
    }
]);