<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
<<<<<<< HEAD:back/migrations/Version20221222142602.php
final class Version20221222142602 extends AbstractMigration
=======
final class Version20221222133022 extends AbstractMigration
>>>>>>> feature/BRCOOKIES:back/migrations/Version20221222133022.php
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD zipcode VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE panier ADD CONSTRAINT FK_24CC0DF2A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE panier_articles ADD CONSTRAINT FK_2598381A1EBAF6CC FOREIGN KEY (articles_id) REFERENCES articles (id)');
        $this->addSql('ALTER TABLE panier_articles ADD CONSTRAINT FK_2598381A498DA827 FOREIGN KEY (size_id) REFERENCES size (id)');
        $this->addSql('CREATE INDEX IDX_2598381A498DA827 ON panier_articles (size_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
<<<<<<< HEAD:back/migrations/Version20221222142602.php
        $this->addSql('ALTER TABLE user DROP zipcode');
        $this->addSql('ALTER TABLE panier DROP FOREIGN KEY FK_24CC0DF2A76ED395');
=======
        $this->addSql('DROP TABLE pays');
        $this->addSql('DROP TABLE poid');
>>>>>>> feature/BRCOOKIES:back/migrations/Version20221222133022.php
        $this->addSql('ALTER TABLE panier_articles DROP FOREIGN KEY FK_2598381A1EBAF6CC');
        $this->addSql('ALTER TABLE panier_articles DROP FOREIGN KEY FK_2598381A498DA827');
        $this->addSql('DROP INDEX IDX_2598381A498DA827 ON panier_articles');
        $this->addSql('ALTER TABLE panier DROP FOREIGN KEY FK_24CC0DF2A76ED395');
        $this->addSql('ALTER TABLE articles DROP FOREIGN KEY FK_BFDD3168BCF5E72D');
        $this->addSql('ALTER TABLE articles DROP FOREIGN KEY FK_BFDD3168A27126E0');
    }
}
