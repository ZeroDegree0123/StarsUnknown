/*
  Warnings:

  - You are about to drop the column `planetId` on the `Planet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Star` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `img` to the `Astronaut` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `Constellation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `Planet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `SpaceCraft` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `Star` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Planet` DROP FOREIGN KEY `Planet_planetId_fkey`;

-- AlterTable
ALTER TABLE `Astronaut` ADD COLUMN `img` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Constellation` ADD COLUMN `img` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Planet` DROP COLUMN `planetId`,
    ADD COLUMN `img` VARCHAR(191) NOT NULL,
    ADD COLUMN `starName` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `SpaceCraft` ADD COLUMN `img` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Star` ADD COLUMN `img` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Star_name_key` ON `Star`(`name`);

-- AddForeignKey
ALTER TABLE `Planet` ADD CONSTRAINT `Planet_starName_fkey` FOREIGN KEY (`starName`) REFERENCES `Star`(`name`) ON DELETE SET NULL ON UPDATE CASCADE;
