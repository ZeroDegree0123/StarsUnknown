/*
  Warnings:

  - You are about to drop the column `starId` on the `Star` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Constellation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Star` DROP FOREIGN KEY `Star_starId_fkey`;

-- AlterTable
ALTER TABLE `Star` DROP COLUMN `starId`,
    ADD COLUMN `constellationName` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Constellation_name_key` ON `Constellation`(`name`);

-- AddForeignKey
ALTER TABLE `Star` ADD CONSTRAINT `Star_constellationName_fkey` FOREIGN KEY (`constellationName`) REFERENCES `Constellation`(`name`) ON DELETE SET NULL ON UPDATE CASCADE;
