package com.postgresql.centralDB;


import com.postgresql.centralDB.model.Person;
import com.postgresql.centralDB.repo.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonController {

    @Autowired
    private PersonRepo personRepo;

    //Post one entry
    @PostMapping("/addPerson")
    @CrossOrigin("*")
    public ResponseEntity<Person> addPerson(@RequestBody Person person){
        Person response = personRepo.save(person);
        return ResponseEntity.ok(response);
    }

    //Post more than one entry
    @PostMapping("/addAll")
    public List<Person> addAll(@RequestBody List<Person> personList){
        return personRepo.saveAll(personList);
    }

    //Get all data from table
    @GetMapping("/fetchAll")
    public List<Person> getAllPerson(){
        return personRepo.findAll();
    }

    //Get data from table by ID
    @GetMapping("/fetchById/{id}")
    public Person getPerson(@PathVariable Long id){
        return personRepo.findById(id).orElse(null);
    }

    //Update existing data
    @PutMapping("/update/{id}")
    public Person updatePerson(@PathVariable long id, @RequestBody Person person){
        Person existingData = personRepo.findById(id).orElse(null);
        if(existingData!=null){
            existingData.setName(person.getName());
            personRepo.save(existingData);
            return existingData;
        }else{
            return null;
        }
    }

    @DeleteMapping("/delete/{id}")
    public void deletePerson(@PathVariable Long id){
        personRepo.deleteById(id);
    }

}
