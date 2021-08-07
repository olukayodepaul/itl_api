class UserQueryHandler{

    static getQueryHandler(){

        const setAllQuery = {
            validateUsers:`SELECT * FROM users WHERE username = $1 AND password = $2`,
            getUserModule:`SELECT b.id as moduleid, b.name as modulename FROM usersmodules a, modules b
            WHERE a.module_id = b.id
            AND a.user_id = $1`
        }

        return JSON.stringify(setAllQuery);
    }
}

module.exports = UserQueryHandler;