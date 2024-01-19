package com.fintech.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fintech.model.CaseLogin;

public interface CaseLoginRepo extends JpaRepository<CaseLogin,Long> {
    
}
