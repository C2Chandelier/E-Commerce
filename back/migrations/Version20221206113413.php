<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221206113413 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE articles ADD id_categorie VARCHAR(255) NOT NULL, CHANGE image image VARCHAR(255) NOT NULL, CHANGE description description VARCHAR(4000) NOT NULL');
        $this->addSql('DROP INDEX email ON user');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE articles DROP id_categorie, CHANGE image image VARCHAR(500) NOT NULL, CHANGE description description VARCHAR(1000) NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX email ON user (email)');
    }
}
