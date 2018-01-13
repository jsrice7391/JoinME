DROP DATABASE projects_db;
CREATE DATABASE projects_db;

USE projects_db;

CREATE TABLE user_table
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE projects
(
	id int NOT NULL AUTO_INCREMENT,
	project_name varchar(255) NOT NULL,
	project_type varchar(255) NOT NULL,
	project_description varchar(512) NOT NULL,
	start_time DATE NOT NULL,
	end_time DATE NOT NULL,
    project_space varchar(255) NOT NULL,
    user_table_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_table_id) REFERENCES user_table(id)
);

CREATE TABLE steps
(
	id int NOT NULL AUTO_INCREMENT,
	steps_name varchar(255) NOT NULL,
	step_description varchar(512) NOT NULL,
	completed BOOLEAN default false,
    projects_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (projects_id) REFERENCES projects(id)
);

