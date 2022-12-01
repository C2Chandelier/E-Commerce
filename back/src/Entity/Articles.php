<?php

namespace App\Entity;
use ApiPlatform\Metadata\ApiFilter;
use App\Repository\ArticlesRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;

#[ORM\Entity(repositoryClass: ArticlesRepository::class)]
<<<<<<< HEAD
#[ApiResource]
#[ApiResource(paginationEnabled: false)]
=======
#[ApiResource(operations: [
    new Get(),
    new GetCollection()
])]
>>>>>>> 9b743625692b1bede092d7763ced9eb3651b5588
class Articles
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $prix = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

<<<<<<< HEAD

=======
>>>>>>> 9b743625692b1bede092d7763ced9eb3651b5588
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getPrix(): ?string
    {
        return $this->prix;
    }

    public function setPrix(string $prix): self
    {
        $this->prix = $prix;

        return $this;
    }
    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }
}
