/*
  Warnings:

  - Added the required column `planetId` to the `Planet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starId` to the `Star` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Planet` DROP FOREIGN KEY `Planet_id_fkey`;

-- DropForeignKey
ALTER TABLE `Star` DROP FOREIGN KEY `Star_id_fkey`;

-- AlterTable
ALTER TABLE `Planet` ADD COLUMN `planetId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Star` ADD COLUMN `starId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Star` ADD CONSTRAINT `Star_starId_fkey` FOREIGN KEY (`starId`) REFERENCES `Constellation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Planet` ADD CONSTRAINT `Planet_planetId_fkey` FOREIGN KEY (`planetId`) REFERENCES `Star`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
