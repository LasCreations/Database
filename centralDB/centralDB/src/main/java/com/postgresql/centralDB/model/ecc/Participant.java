package com.postgresql.centralDB.model.ecc;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name= "participant")


public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name")
    private String first_name;
    @Column(name = "last_name")
    private  String last_name;
    private String telephone;
    private String email;
}

