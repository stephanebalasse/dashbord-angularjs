app.service("capitalize", [

    function() {
        this.capitalize = function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        };
    }
]);