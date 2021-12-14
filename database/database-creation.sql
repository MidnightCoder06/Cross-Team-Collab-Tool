-- psql
CREATE DATABASE cross_team_collab_tool;
-- \c cross_team_collab_tool
CREATE TABLE tasks(task_id int NOT NULL PRIMARY KEY, author VARCHAR(255), description VARCHAR(255), priority_level VARCHAR(255), engineer_type VARCHAR(255));
 -- \dt to check for tables (lists all tables)