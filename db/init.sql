create DATABASE gradebook;
use gradebook;

CREATE TABLE IF NOT EXISTS grades (
            `id` int AUTO_INCREMENT,
            `Student` NUMERIC(6, 3),
            `Grade` NUMERIC(4, 2),
            PRIMARY KEY(`id`)
    );

INSERT INTO grades (`Student`,`Grade`) VALUES
("Charles", "A"),
("Jimmy Schwimby", "A+"),