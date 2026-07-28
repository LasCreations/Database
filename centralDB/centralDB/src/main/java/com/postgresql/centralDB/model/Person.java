package com.postgresql.centralDB.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name= "person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
}
