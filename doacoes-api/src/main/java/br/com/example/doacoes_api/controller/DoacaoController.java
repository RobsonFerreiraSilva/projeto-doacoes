package br.com.example.doacoes_api.controller;

import br.com.example.doacoes_api.model.Doacao;
import br.com.example.doacoes_api.repository.DoacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doacoes")
public class DoacaoController {

    @Autowired
    private DoacaoRepository doacaoRepository;

    @GetMapping
    public List<Doacao> listarTodas() {
        return doacaoRepository.findAll();
    }

    @PostMapping
    public Doacao registrar(@RequestBody Doacao doacao) {
        return doacaoRepository.save(doacao);
    }
}