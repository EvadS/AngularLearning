package com.se.sample.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Person {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private long id;

    @Size(min = 1, max = 20)
    @NotBlank(message = "Name is mandatory")
    private String firstName;

    @NotBlank(message = "Name is mandatory")
    private String lastName;

    private Date birthDate;
}
