package br.com.example.doacoes_api.controller;

import br.com.example.doacoes_api.model.ItemNecessidade;
import br.com.example.doacoes_api.repository.ItemNecessidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/itens")
public class ItemNecessidadeController {

    @Autowired
    private ItemNecessidadeRepository itemRepository;

    @GetMapping
    public List<ItemNecessidade> listarTodos() {
        return itemRepository.findAll();
    }

    @PostMapping
    public ItemNecessidade cadastrar(@RequestBody ItemNecessidade item) {
        return itemRepository.save(item);
    }
}