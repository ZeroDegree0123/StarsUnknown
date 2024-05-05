/*
  Warnings:

  - You are about to drop the column `distance` on the `Planet` table. All the data in the column will be lost.
  - You are about to drop the column `crew` on the `SpaceCraft` table. All the data in the column will be lost.
  - You are about to drop the column `distance` on the `Star` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Planet` DROP COLUMN `distance`;

-- AlterTable
ALTER TABLE `SpaceCraft` DROP COLUMN `crew`;

-- AlterTable
ALTER TABLE `Star` DROP COLUMN `distance`;
