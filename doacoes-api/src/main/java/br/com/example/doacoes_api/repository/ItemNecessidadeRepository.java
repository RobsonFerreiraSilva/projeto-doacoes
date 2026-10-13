package br.com.example.doacoes_api.repository;

import br.com.example.doacoes_api.model.ItemNecessidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemNecessidadeRepository extends JpaRepository<ItemNecessidade, Long> {
}
