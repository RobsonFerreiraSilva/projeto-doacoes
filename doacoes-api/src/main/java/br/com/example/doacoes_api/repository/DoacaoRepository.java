package br.com.example.doacoes_api.repository;

import br.com.example.doacoes_api.model.Doacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoacaoRepository extends JpaRepository<Doacao, Long> {
}