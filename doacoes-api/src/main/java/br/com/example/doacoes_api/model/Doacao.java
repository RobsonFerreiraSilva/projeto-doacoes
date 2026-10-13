package br.com.example.doacoes_api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Entity
@Table(name = "doacoes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Doacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relacionamento: Várias doações podem ir para um mesmo item
    @ManyToOne
    @JoinColumn(name = "item_id", nullable = false)
    private ItemNecessidade item;

    @Column(name = "nome_doador", nullable = false)
    private String nomeDoador;

    @Column(name = "contato_doador")
    private String contatoDoador; // WhatsApp ou Email do doador

    @Column(name = "quantidade_doada", nullable = false)
    private Integer quantidadeDoada;

    @Column(name = "data_agendamento")
    private LocalDate dataAgendamento;

    @Column(nullable = false)
    private String status = "PENDENTE"; // PENDENTE, CONFIRMADO ou CANCELADO
}