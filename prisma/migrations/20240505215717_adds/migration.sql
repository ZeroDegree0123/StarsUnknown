/*
  Warnings:

  - You are about to drop the column `moons` on the `Planet` table. All the data in the column will be lost.
  - You are about to drop the column `starName` on the `Planet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Planet` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Planet` DROP FOREIGN KEY `Planet_starName_fkey`;

-- AlterTable
ALTER TABLE `Planet` DROP COLUMN `moons`,
    DROP COLUMN `starName`;

-- CreateTable
CREATE TABLE `Moon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `planetName` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Moon_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Planet_name_key` ON `Planet`(`name`);

-- AddForeignKey
ALTER TABLE `Moon` ADD CONSTRAINT `Moon_planetName_fkey` FOREIGN KEY (`planetName`) REFERENCES `Planet`(`name`) ON DELETE SET NULL ON UPDATE CASCADE;
