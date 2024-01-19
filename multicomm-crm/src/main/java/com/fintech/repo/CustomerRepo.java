package com.fintech.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fintech.model.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Long> {
    List<Customer> findByCompany_Id(Long companyId);
}
