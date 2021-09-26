package com.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {

}
