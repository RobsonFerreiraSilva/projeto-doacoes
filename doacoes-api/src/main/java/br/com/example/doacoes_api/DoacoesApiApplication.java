package br.com.example.doacoes_api;

import br.com.example.doacoes_api.model.Ong;
import br.com.example.doacoes_api.repository.OngRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DoacoesApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(DoacoesApiApplication.class, args);
	}

	// Insere as 6 ONGs reais no banco de dados automaticamente se estiver vazio
	@Bean
	CommandLineRunner rodarAoIniciar(OngRepository repository) {
		return args -> {
			if (repository.count() == 0) {
				repository.save(new Ong(null, "Instituto Caminhos do Saber", "Oferece reforço escolar, oficinas de leitura, inclusão digital e bolsas de estudo para crianças e adolescentes em situação de vulnerabilidade.", "Educação", "São Paulo - SP", "Centro", "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 80000.0, 48750.0, "contato@caminhosdosaber.org.br", "123456"));

				repository.save(new Ong(null, "Projeto Patas que Transformam", "Resgata cães e gatos, realiza tratamentos veterinários, promove castrações e busca lares responsáveis para adoção.", "Proteção animal", "Curitiba - PR", "Batel", "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 60000.0, 32120.0, "contato@patasquetransformam.org.br", "123456"));

				repository.save(new Ong(null, "Instituto Verde Futuro", "Desenvolve ações de reflorestamento, educação ambiental, reciclagem e recuperação de áreas degradadas.", "Meio ambiente", "Belo Horizonte - MG", "Savassi", "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 50000.0, 27300.0, "contato@verdefuturo.org.br", "123456"));

				repository.save(new Ong(null, "Rede Vida e Saúde", "Distribui medicamentos, oferece atendimento básico de saúde e promove campanhas de prevenção em comunidades carentes.", "Saúde", "Recife - PE", "Boa Viagem", "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 100000.0, 64200.0, "contato@redevidasaude.org.br", "123456"));

				repository.save(new Ong(null, "Casa Recomeço", "Oferece alimentação, higiene, acolhimento temporário, capacitação profissional e auxílio na reinserção social.", "Assistência social", "Rio de Janeiro - RJ", "Vila Isabel", "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 120000.0, 75800.0, "contato@casarecomeco.org.br", "123456"));

				repository.save(new Ong(null, "Mulheres em Movimento", "Oferece cursos profissionalizantes, apoio psicológico, orientação jurídica e incentivo ao empreendedorismo para mulheres.", "Direitos humanos", "Salvador - BA", "Pelourinho", "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 90000.0, 53600.0, "contato@mulheresemmovimento.org.br", "123456"));
			}
		};
	}
}