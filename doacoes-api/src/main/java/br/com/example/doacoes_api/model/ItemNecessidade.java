package br.com.example.doacoes_api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "itens_necessidade")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemNecessidade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relacionamento: Vários itens podem pertencer a uma ONG (Muitos para Um)
    @ManyToOne
    @JoinColumn(name = "ong_id", nullable = false)
    private Ong ong;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String categoria; // Ex: ALIMENTO, HIGIENE, ROUPA, OUTROS

    @Column(name = "quantidade_meta", nullable = false)
    private Integer quantidadeMeta;

    @Column(name = "quantidade_atual", nullable = false)
    private Integer quantidadeAtual = 0;

    @Column(nullable = false)
    private String status = "ABERTO"; // ABERTO ou CONCLUIDO
}