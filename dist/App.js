//DATA TYPES with variables and functions
var world = 'hello';
var a = 'var';
function givename(a, b) {
    return a + " " + b;
}
var givefullname = function (a, b) {
    return a + " " + b;
};
//unknown and type assertion
var varAny = 56;
var varunknown = 23;
var str1 = varAny;
var str2 = varunknown;
var varInt = 10;
var varStr = varInt;
console.log('varstr is ', varStr);
// DOM- typescript gives variables generic types such as Element, EventTarget
// we need to define specific types for them
var inputEle = document.querySelector('.foo');
inputEle.addEventListener('blur', function (event) {
    var tar = event.target;
    console.log(tar.value);
});
var User = /** @class */ (function () {
    function User(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50; // readonly is similar to const
    return User;
}());
console.log(User.maxAge); // static is accessible by CLASS and not instance
var userAgain = new User('Merry', 'Christmas');
userAgain.getFullName();
var user1 = {
    id: '12345',
    data: 'user is studying',
    meta: ['react', 'typescript']
};
var user2 = {
    id: '123456',
    data: {
        weight: '20kg',
        height: '55cm'
    },
    meta: 'my cat stella guys'
};
//ENUMS
var WorkStatusEnum;
(function (WorkStatusEnum) {
    WorkStatusEnum["started"] = "yes has started";
    WorkStatusEnum["procastinated"] = "oopsies";
    WorkStatusEnum["done"] = "dont ask me, Ill hand-in after a week";
    WorkStatusEnum["submit"] = "no more work please";
})(WorkStatusEnum || (WorkStatusEnum = {}));
console.log(WorkStatusEnum.started);
var statusOfsubmission = WorkStatusEnum.done;
statusOfsubmission = WorkStatusEnum.submit;
