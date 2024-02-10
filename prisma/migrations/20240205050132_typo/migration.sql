/*
  Warnings:

  - You are about to drop the column `img` on the `Astronaut` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Constellation` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Planet` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `SpaceCraft` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Star` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Astronaut` DROP COLUMN `img`,
    ADD COLUMN `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Constellation` DROP COLUMN `img`,
    ADD COLUMN `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Planet` DROP COLUMN `img`,
    ADD COLUMN `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `SpaceCraft` DROP COLUMN `img`,
    ADD COLUMN `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Star` DROP COLUMN `img`,
    ADD COLUMN `image` VARCHAR(191) NULL;
