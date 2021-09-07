const express = require('express')
const PORT = 8080;
const app = express();
const cors = require('cors');
const tempknex = require('knex')
const knex = tempknex(require('./knexfile.js')["development"])

app.use(cors());

app.get('/', (req,res) => {
    res.status(200)
    res.send("List of Endpoints: " + " \n" +
    '1) /org/ - GET - Lists all endpoints in the /org/:orgid/ root' + " \n" +
    '2) /all - GET - Sends all groups (and non-grouped users) in org' + " \n" +
    '3) /group/:groupid - GET - Sends all users in group' + " \n" +
    '4) /users/:userid - GET info on specific user' + " \n" +
    '5) /users/:userid - DELETE delete user and associated trackers' + " \n" +
    '6) /user/:userid/trackers - GET trackers for a user in the org' + " \n" +
    '7) /user/:userid/trackers - POST new tracker for a user' + " \n" +
    '8) /user/:userid/trackers/:trackerid - PATCH update tracker for user' + " \n" +
    '9) /user/:userid/trackers/:trackerid - DELETE - delete tracker for user' + " \n" +
    '10) /new/group - POST create new group. New group content in POST body.' + " \n" +
    '11) /new/user - POST create new user. New user content in POST body; user groupid is null if not part of a group; group ID otherwise.' + " \n" +
    '12) /user - GET all users; queryable by name (first, last)' + " \n" +
    '13) /group - GET all groups; queryable by name' + " \n" +
    '14) /export - GET message with CSV as response body' + " \n" +
    '15) /export/g/:groupid - GET message with CSV as response body; for group' + " \n" +
    '16) /export/u/:userid - GET message with CSV as response body; for user' + " \n" +
    '17) /category - Lists all the categories in the /category/ root'+ "\n"+
    'End Of List'
    )
})

app.get('/org/:orgid/', (req, res) => {


    knex
    .select('*')
    .from('organizations')
    .where('id', req.params.orgid)
    .then((data) => {
        res.send(data)
    })
})

app.get('/group/:groupid', (req, res) => {
    knex
    .select('*')
    .from('users')
    .where('group_id', req.params.groupid)
    .then((data) => {
        res.send(data)
    })
})

app.get('/org/:orgid/:groupid', (req, res) => {
    knex
    .select('*')
    .from('users')
    .where({'organization_id': req.params.orgid,  'group_id': req.params.groupid })
    .then((data) => {
        res.send(data)
    })
})

app.get('/all', (req, res) => {
    knex
    .select('*')
    .from('users')
    .then((data) => {
        res.send(data)
    })
})

app.get('/users/:userid', (req, res) => {
    knex
    .select('*')
    .from('users')
    .where('id', req.params.userid)
    .then((data) => {
        res.send(data)
    })
})

// app.get('/user/:userid/trackers', (req, res) => {
//     knex('tracker_users AS t_u')
//     .join('users as u', 't_u.user_id', 'u.id')
//     .join('trackers as t', 't_u.tracker_id', 't.id')
//     .select(
//         't_u.user_id',
//         'u.name',
//         'u_t.tracker_id',
//         't.name',
//         't_u.file_path',
//         't_u.is_complete')
//     .from('trackers')
//     .where('user_id', req.params.userid)
//     .then((data) => {
//         res.send(data)
//     })
// })
app.get('/user/:userid/trackers', (req, res) => {
    knex('trackers_users as t_u')
    .join('users as u', 't_u.user_id', 'u.id')
    .join('trackers as t', 't_u.tracker_id', 't.id')
    .join('categories as c', 't.categories', 'c.id')
    .join('sub_categories as s_c', 't.sub_categories', 's_c.id')
    .select(
        't_u.user_id',
        'u.last_name',
        "u.first_name",
        't_u.tracker_id',
        't.categories',
        'c.title AS categories_title',
        't.sub_categories',
        's_c.title AS sub_categories_title',
        't.comments',
        't.due_date',
        't.next_date',
        't_u.file_path',
        't_u.is_complete')
    .where('user_id', req.params.userid)
    .then((data) => {
        console.log(data)
        return(res.send(data))
    })
})

app.listen(PORT, () => {
    console.log('How can we tell if it is working')
})

/*

SELECT (user.last_name AS user_name) from users INNER JOIN trackers_users ON users.id = trackers_users.user_id;
*/