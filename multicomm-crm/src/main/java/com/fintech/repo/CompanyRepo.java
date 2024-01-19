package com.fintech.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fintech.model.Company;

public interface CompanyRepo extends JpaRepository<Company,Long>{
    
}
