-- AlterTable
ALTER TABLE `Planet` MODIFY `distance` VARCHAR(191) NOT NULL,
    MODIFY `size` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `SpaceCraft` MODIFY `yearBuilt` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Star` MODIFY `distance` VARCHAR(191) NOT NULL,
    MODIFY `size` VARCHAR(191) NOT NULL;
