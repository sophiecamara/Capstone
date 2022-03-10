package com.example.demo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.AndroidModel;


@Repository
public interface AndroidRepository extends JpaRepository<AndroidModel,Integer>{

List<AndroidModel> findByBrandname(String brandname);
}

