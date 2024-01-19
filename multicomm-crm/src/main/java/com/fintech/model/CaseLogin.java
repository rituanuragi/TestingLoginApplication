package com.fintech.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CaseLogin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime dateOfLogin;
    @PrePersist
    public void LocalDateTime() {
        dateOfLogin = LocalDateTime.now();
    }

    private String employeeIdOfCaseOwner;
    // @Pattern(regexp = "^[A-Z]+$",message = "only capital letters are allowed")
    private String employeeName;
    // @Pattern(regexp = "^[A-Z]+$",message = "only capital letters are allowed")
    private String managerName;
    private String employementType;
    private String branchName;
    @Pattern(regexp = "^[A-Z]+$",message = "only capital letters are allowed")
    private String customerName;
    @Size(min = 10, max = 10, message = "phone no must be exactly 10 digits")
    private String customerContactNo;
    @Email(message = "Please provide a valid email address")
    private String mailId;
    private LocalDate customerDateOfBirth;
    private String customerPermanentAddress;
    private String officeAddressWithPin;
    private String city;
    private String state;
    private String customerOccupation;
    private String requiredLoanType;
    private String requiredLoanAmount;
    private String latestCIBILScore;
    private String bankingPassAndOtherDocPass;
    private String otherDoc;
    private String toBeLoggedInFromWhichLender;
    private String remarks;
}
