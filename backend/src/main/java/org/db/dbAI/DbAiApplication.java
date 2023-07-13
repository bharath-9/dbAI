package org.db.dbAI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DbAiApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(DbAiApplication.class);
		app.run(args);
	}

}
