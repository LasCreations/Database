package com.postgresql.centralDB;


import com.postgresql.centralDB.model.Person;
import com.postgresql.centralDB.repo.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {

    @Autowired
    private PersonRepo personRepo;
    @PostMapping("/addPerson")
    public ResponseEntity<Person> addPerson(@RequestBody Person person){
        Person response = personRepo.save(person);
        return ResponseEntity.ok(response);

    }
}
