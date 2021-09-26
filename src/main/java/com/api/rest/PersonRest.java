package com.api.rest;

import java.net.URI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.service.PersonService;
import com.api.model.Person;


@RestController
@RequestMapping ("/person/")

public class PersonRest {
	
	@Autowired
	private PersonService personService;
	
	@GetMapping
	private ResponseEntity<List<Person>> getAllTypes (){
		
		return ResponseEntity.ok(personService.findAll());
		
	}
	
	@PostMapping
	private ResponseEntity<Person> savePerson (@RequestBody Person person){
		
     try {
    	 
    	 Person personSaved = personService.save(person);	
    	 return ResponseEntity.created(new URI("/person/" + personSaved.getId())).body(personSaved);	
    	 
     } catch (Exception e) {
    	 
    	 return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
     }
		
	 
	}
}
