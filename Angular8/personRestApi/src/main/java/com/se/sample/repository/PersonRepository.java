package com.se.sample.repository;

import com.se.sample.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

    //public interface EmployeeRepository extends JpaRepository<Employee
}
