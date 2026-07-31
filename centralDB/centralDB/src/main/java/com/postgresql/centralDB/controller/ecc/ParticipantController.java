package com.postgresql.centralDB.controller.ecc;


import com.postgresql.centralDB.interfaces.ParticipantRepo;
import com.postgresql.centralDB.model.Person;
import com.postgresql.centralDB.model.ecc.Participant;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class ParticipantController {

    @Autowired
    private ParticipantRepo participantRepo;

    //Post one entry
    @PostMapping("/api/ecc/participants/add")
    @CrossOrigin("*")
    public ResponseEntity<Participant> add(@RequestBody Participant participant){
        Participant response = participantRepo.save(participant);
        return ResponseEntity.ok(response);
    }

    //Post more than one entry
    @PostMapping("/api/ecc/participants/add/all")
    public List<Participant> addAll(@RequestBody List<Participant> participantList){
        return participantRepo.saveAll(participantList);
    }

    //Get all data from table
    @GetMapping("/api/ecc/participants/fetch/all")
    public List<Participant> getAll(){
        return participantRepo.findAll();
    }

    //Get data from table by ID
    @GetMapping("/api/ecc/participants/fetch/{id}")
    public Participant get(@PathVariable Long id){
        return participantRepo.findById(id).orElse(null);
    }

    //Update existing data
    @PutMapping("/api/ecc/participants/update/{id}")
    public Participant update(@PathVariable long id, @RequestBody Participant participant){
        Participant existingData = participantRepo.findById(id).orElse(null);
        if(existingData!=null){
            existingData.setFirst_name(participant.getFirst_name());
            existingData.setLast_name(participant.getLast_name());
            existingData.setEmail(participant.getEmail());
            existingData.setTelephone(participant.getTelephone());
            participantRepo.save(existingData);
            return existingData;
        }else{
            return null;
        }
    }

    //Update existing data
    @DeleteMapping("/api/ecc/participants/delete/{id}")
    public void delete(@PathVariable Long id){
        participantRepo.deleteById(id);
    }

}
