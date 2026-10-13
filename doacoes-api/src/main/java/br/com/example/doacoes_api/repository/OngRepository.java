package br.com.example.doacoes_api.repository;

import br.com.example.doacoes_api.model.Ong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OngRepository extends JpaRepository<Ong, Long> {

    // O Spring Boot lê esse nome e entende: "Vá no banco e busque uma ONG que tenha esse email E essa senha"
    Ong findByEmailAndSenha(String email, String senha);
}