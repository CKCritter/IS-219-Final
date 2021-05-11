create DATABASE gradebook;
use gradebook;

CREATE TABLE IF NOT EXISTS grades (
            `id` int AUTO_INCREMENT,
            `Student` VARCHAR(256),
            `Grade` VARCHAR(2),
            PRIMARY KEY(`id`)
    );

INSERT INTO grades (`Student`,`Grade`) VALUES
('Charles', 'A'),
('Jimmy Schwimby', 'A+')