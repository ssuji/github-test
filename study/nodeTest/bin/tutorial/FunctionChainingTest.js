/**
 * Created by suji on 2017-01-16.
 */
// function chaining : function을 chain처럼 연결해서 사용
function User(name) {
    this.name = name;
}

User.prototype.greeting = function() {
    console.log('hello!');
    return this;
}

User.prototype.introduce = function() {
    console.log(`I am ${this.name}`);
    return this;
}

var chris = new User('chris');
chris.greeting().introduce();