/*
  Warnings:

  - You are about to drop the column `yearBuilt` on the `SpaceCraft` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Star` table. All the data in the column will be lost.
  - Added the required column `yearLaunched` to the `SpaceCraft` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Moon` MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `SpaceCraft` DROP COLUMN `yearBuilt`,
    ADD COLUMN `yearLaunched` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Star` DROP COLUMN `size`,
    ADD COLUMN `magnitude` INTEGER NULL;
