// declare a module
var homeController = angular.module("homeController", []);

// configure the module
homeController.filter("greet", function () {
    return function () {
        var today = new Date();
        var curHr = today.getHours();
        var ending = ", I'm ";

        if (curHr < 12) {
            return "Good morning" + ending;
        } else if (curHr >= 12 && curHr <= 17) {
            return "Good afternoon" + ending;
        } else if (curHr > 17 && curHr <= 24) {
            return "Good evening" + ending;
        } else {
            return "I'm not sure what time it is!";
        }
    };
});