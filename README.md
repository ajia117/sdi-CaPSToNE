# sdi-CaPSToNE
Certification and Personnel Secure Tracking or Notification Environment

## Setup Instructions

### Server
1. Run <code>docker pull postgres</code>.
2. Run <code>docker run --rm --name pg-capstone -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v ${pwd}/postgres:/var/lib/postgresql/data postgres</code>.
3. Create the database <code>capstone</code> in your postgres container.
