-- CreateTable
CREATE TABLE `Pagamentos` (
    `id` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NOT NULL,
    `Valor` INTEGER NOT NULL,
    `saldoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Saldos` (
    `id` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NOT NULL,
    `ValorInicial` INTEGER NOT NULL,
    `ValorRestante` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pagamentos` ADD CONSTRAINT `Pagamentos_saldoId_fkey` FOREIGN KEY (`saldoId`) REFERENCES `Saldos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
