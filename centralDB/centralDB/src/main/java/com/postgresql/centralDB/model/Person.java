package com.postgresql.centralDB.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name= "person")
public class Person {
    @Id
    private Long id;
    private String name;
}
