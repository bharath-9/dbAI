package org.db.dbAI.controllers;

import org.db.dbAI.services.UploadCSVService;
import org.db.dbAI.utils.ValidateCSV;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.Principal;

import static org.slf4j.LoggerFactory.getLogger;

@RestController
public class UploadCSVController {

    private static final Logger LOG= getLogger(UploadCSVController.class);
    private final UploadCSVService service; private final Path root;
    private final ValidateCSV validator;
    @Autowired
    public UploadCSVController (UploadCSVService service, @Value("$(directory.path)") String dirPath) {
        this.service = service;
        this.root = Paths.get(dirPath).resolve("csvfiles");
        this.validator = new ValidateCSV();
    }


//     @PutMapping("/uploadcsv")
//     public ResponseEntity<String> uploadCSV (Principal principal, @RequestParam("File") MultipartFile file) {
//
//        try {
//            File csvFile = convert(file);
//            validator.isValidCSV(file, csvFile);
//        }
}
