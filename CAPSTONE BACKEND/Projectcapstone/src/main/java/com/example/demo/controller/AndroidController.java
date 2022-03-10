package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.AndroidModel;
import com.example.demo.repository.AndroidRepository;
import com.example.demo.exception.ExceptionHandler;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class AndroidController {

@Autowired
	private AndroidRepository androidRepo;
    

	//get all android
		
	@GetMapping("/allandroids")
	public List<AndroidModel> getAllAndroids()
	{
		
		return androidRepo.findAll();
	}

	
	//	create android REST API
	@PostMapping("/addandroid")
    public AndroidModel newAndroids(@RequestBody AndroidModel a)
    {
		
		return androidRepo.save(a);
    }
	

    // build get android by id REST API
	@GetMapping("/android/id/{id}")
	public ResponseEntity<AndroidModel> getAndroidModelById(@PathVariable int id)
	{
		AndroidModel a=androidRepo.findById(id).orElseThrow(() ->  new ExceptionHandler("Model not found"));
		return ResponseEntity.ok(a);                 
	}
	
	
	@GetMapping("/android/brand/{brandname}")
	public List<AndroidModel> getAndroidModelByName(@PathVariable String brandname)
	{
		
		List <AndroidModel> androids=androidRepo.findByBrandname(brandname);
		if(androids.isEmpty())
		{
			System.out.println(new ExceptionHandler("Model(s) with the brandname "+ brandname +" not found"));
		}
		
		return androidRepo.findByBrandname(brandname);
	}
	   // build update android REST API
	@PutMapping("/android/{id}")
	public ResponseEntity<AndroidModel> updateAndroid(@PathVariable int id, @RequestBody AndroidModel Android)
	{
	AndroidModel a= androidRepo.findById(id).orElseThrow(() ->  new ExceptionHandler("Model not found"));
	    a.setBrandname(Android.getBrandname());
;	    a.setServiceprovider(Android.getServiceprovider());
	    a.setServicetype(Android.getServicetype());
	    a.setCost(Android.getCost());
	    a.setImage(Android.getImage());
	   AndroidModel updatedAndroid=androidRepo.save(a);
	    return ResponseEntity.ok(updatedAndroid);
	}
	
	 // build delete android REST API
	@DeleteMapping("/android/{id}")
	public String deleteAndroid(@PathVariable int id)
	{
		androidRepo.findById(id).orElseThrow(() ->  new ExceptionHandler("Model not found"));
	    androidRepo.deleteById(id);
	    return "The android with id: "+ id +" is removed from the database.";
	}
	
}

