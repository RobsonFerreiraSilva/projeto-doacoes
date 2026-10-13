package br.com.example.doacoes_api.controller;

import br.com.example.doacoes_api.model.Ong;
import br.com.example.doacoes_api.repository.OngRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ongs")
@CrossOrigin(origins = "*")
public class OngController {

    @Autowired
    private OngRepository ongRepository;

    @GetMapping
    public List<Ong> listarTodas() {
        return ongRepository.findAll();
    }

    @PostMapping
    public Ong cadastrar(@RequestBody Ong ong) {
        return ongRepository.save(ong);
    }

    // NOVA ROTA DE LOGIN AQUI!
    @PostMapping("/login")
    public ResponseEntity<?> fazerLogin(@RequestBody Ong dadosLogin) {
        // Vai no banco e tenta achar a ONG com o email e senha digitados
        Ong ongEncontrada = ongRepository.findByEmailAndSenha(dadosLogin.getEmail(), dadosLogin.getSenha());

        if (ongEncontrada != null) {
            // Se achou, devolve um Código 200 (OK) e os dados da ONG
            return ResponseEntity.ok(ongEncontrada);
        } else {
            // Se não achou (ou senha errada), devolve Código 401 (Não Autorizado)
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("E-mail ou senha incorretos.");
        }
    }
}