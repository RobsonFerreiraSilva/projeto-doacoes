package br.com.example.doacoes_api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_ongs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ong {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(length = 1000)
    private String descricao;

    private String categoria;
    private String cidade;
    private String bairro;

    @Column(length = 500)
    private String imagem;

    private Double metaArrecadacao;
    private Double valorArrecadado;

    private String email;
    private String senha;
}