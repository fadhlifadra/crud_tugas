CREATE TABLE `mechanic` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nama` VARCHAR(50) NOT NULL,
	`notelp` VARCHAR(50) NULL,
	`plat` VARCHAR(50) NULL,
	`diagnosa` VARCHAR(50) NULL,
	`menginap` VARCHAR(50) NULL,
	`mecha` VARCHAR(50) NULL,
	`pembayaran` VARCHAR(50) NULL,
	PRIMARY KEY (`id`)
)
COLLATE='latin1_swedish_ci'
;
