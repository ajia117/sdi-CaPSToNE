# sdi-CaPSToNE
Certification and Personnel Secure Tracking or Notification Environment

## Setup Instructions

### Server
1. Run <code>docker pull postgres</code>.
2. Run <code>docker run --rm --name pg-capstone -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $(pwd)/postgres:/var/lib/postgresql/data postgres</code>.
3. Create the database <code>capstone</code> in your postgres container.


# ENDPOINT

## /org/:orgid - GET -
 Lists all endpoints in the /org/:orgid/ root
## /all - GET -
Sends all groups (and non-grouped users) in org
## /group/:groupid - GET -
Sends all users in group
## /users/:userid - GET -
info on specific user
## /users/:userid - DELETE -
delete user and associated trackers
## /user/:userid/trackers - GET -
get trackers for a user in the org
## /user/:userid/trackers - POST -
new tracker for a user
## /user/:userid/trackers/:trackerid - PATCH -
update tracker for user
## /user/:userid/trackers/:trackerid - DELETE -
delete tracker for user
## /new/group - POST -
create new group. New group content in POST body.
## /new/user - POST -
create new user. New user content in POST body; user groupid is null if not part of a group; group ID otherwise. 
## /user - GET -
get all users; queryable by name (first, last)
## /group - GET -
get all groups; queryable by name
## /export - GET -
get message with CSV as response body
## export/g/:groupid - GET -
get message with CSV as response body; for group
## /export/u/:userid - GET -
get message with CSV as response body; for user
## /category - GET -
Lists all the categories in the /category/ root

If req.query is defined: include it
