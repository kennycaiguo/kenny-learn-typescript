"use strict";
const db = {
    filterUsers: (filter) => {
        let user1 = {
            admin: true
        };
        let user2 = {
            admin: false
        };
        return [user1, user2];
    }
};
const admins = db.filterUsers(function () {
    return this.admin;
});
console.log(admins);
