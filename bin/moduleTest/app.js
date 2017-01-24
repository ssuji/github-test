/**
 * Created by suji on 2017-01-16.
 */
// users 객체. id와 name을 속성으로 가지는 객체.
let users = [
    {
        id: 1,
        name: 'alice'
    },
    {
        id: 2,
        name: 'tom'
    },
    {
        id: 3,
        name: 'chris'
    }
]

module.exports = users;

function setUserName(name) {
    this.name = name;
}
function setId(id) {
    this.id = id;
}