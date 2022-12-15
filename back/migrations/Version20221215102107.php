<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221215102107 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE panier_articles ADD quantity INT NOT NULL');
        $this->addSql('ALTER TABLE panier_articles ADD CONSTRAINT FK_2598381AF77D927C FOREIGN KEY (panier_id) REFERENCES panier (id)');
        $this->addSql('ALTER TABLE panier ADD CONSTRAINT FK_24CC0DF2A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE panier_articles ADD CONSTRAINT FK_2598381A1EBAF6CC FOREIGN KEY (articles_id) REFERENCES articles (id)');

    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE articles DROP FOREIGN KEY FK_BFDD3168BCF5E72D');
        $this->addSql('ALTER TABLE articles DROP FOREIGN KEY FK_BFDD3168A27126E0');
        $this->addSql('ALTER TABLE panier_articles DROP FOREIGN KEY FK_2598381AF77D927C');
        $this->addSql('ALTER TABLE panier_articles DROP FOREIGN KEY FK_2598381A1EBAF6CC');
        $this->addSql('ALTER TABLE panier_articles DROP quantity');
        $this->addSql('ALTER TABLE panier DROP FOREIGN KEY FK_24CC0DF2A76ED395');
    }
}
