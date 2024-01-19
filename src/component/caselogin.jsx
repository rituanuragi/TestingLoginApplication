
import React, { useState,useRef } from 'react';
import { IonCheckbox } from '@ionic/react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';

import axios from 'axios';
import './caselogin.css';

const Caselogin = () => {
  const [selectedLenders, setSelectedLenders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    dateOfLogin:'',
    employeeIdOfCaseOwner: '',
    employeeName: '',
    managerName: '',
    employementType: '',
    branchName: '',
    customerName: '',
    customerContact: '',
    mailId: '',
    customerPan: '',
    customerDateOfBirth: '',
    customerPermanentAddress: '',
    officeAddressWithPin: '',
    state: '',
    city: '',
    customerOccupation: '',
    requiredLoanType: '',
    requiredLoanAmount: '',
    uploadFiles: '',
    latestCIBILScore: '',
    bankingPassAndOtherDocPass: '',
    toBeLoggedInFromWhichLender: '',
    remarks: '',
  });
  const [showNotification, setShowNotification] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const[showAlert,setShowAlert] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleBlur=()=>{
    setShowAlert(false);
  }

  // const handleFileChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     uploadFiles: e.target.files,
  //   });
  // };

  const handleFileChange = (e) => {
    const files = e.target.files;

    // Assuming you have specific input elements for Aadhar Card, Pan Card, etc.
    // You can use the name attribute to determine the type of the file.

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileType = file.name.toLowerCase();

      if (fileType.includes('aadhar')) {
        setFormData({
          ...formData,
          fileOne: file,
        });
      } else if (fileType.includes('pan')) {
        setFormData({
          ...formData,
          fileTwo: file,
        });
      }}}
      const handleLenderChange = (event) => {
        const selectedLender = event.target.value;
        if (event.target.checked) {
          setSelectedLenders((prevSelected) => [...prevSelected, selectedLender]);
        } else {
          setSelectedLenders((prevSelected) =>
            prevSelected.filter((lender) => lender !== selectedLender)
          );
        }
      };
      const lenderOptions = [
        "Bajaj Finance",
        "Tata Capital",
        "HDFC",
        "Axis Bank",
        "ICICI Bank",
        "Kotak Mahindra Bank",
      ];
    
  const handleChooseDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    setFormData({ ...formData, dateOfLogin: formattedDate });
    setIsModalOpen(false);
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowNotification(true);
    

    try {
      const fileFormData = new FormData();
      for (let i = 0; i < formData.uploadFiles.length; i++) {
        fileFormData.append('files', formData.uploadFiles[i]); // Make sure the key is 'files'
      }
  
      // Append other form data to the FormData if needed
      
      fileFormData.append('dateOfLogin', formData.dateOfLogin);
    fileFormData.append('employeeIdOfCaseOwner', formData.employeeIdOfCaseOwner);
    fileFormData.append('employeeName', formData.employeeName);
    fileFormData.append('managerName', formData.managerName);
    fileFormData.append('employementType', formData.employementType);
    fileFormData.append('branchName', formData.branchName);
    fileFormData.append('customerName', formData.customerName);
    fileFormData.append('customerContact', formData.customerContact);
    fileFormData.append('mailId', formData.mailId);
    fileFormData.append('customerPan', formData.customerPan);
    fileFormData.append('customerDateOfBirth', formData.customerDateOfBirth);
    fileFormData.append('customerPermanentAddress', formData.customerPermanentAddress);
    fileFormData.append('officeAddressWithPin', formData.officeAddressWithPin);
    fileFormData.append('state', formData.state);
    fileFormData.append('city', formData.city);
    fileFormData.append('customerOccupation', formData.customerOccupation);
    fileFormData.append('requiredLoanType', formData.requiredLoanType);
    fileFormData.append('requiredLoanAmount', formData.requiredLoanAmount);
    fileFormData.append('latestCIBILScore', formData.latestCIBILScore);
    fileFormData.append('bankingPassAndOtherDocPass', formData.bankingPassAndOtherDocPass);
    fileFormData.append('toBeLoggedInFromWhichLender', formData.toBeLoggedInFromWhichLender);
    fileFormData.append('remarks', formData.remarks);
      // ... append other fields similarly
  
      await axios.post('http://localhost:8072/savecaselogin', fileFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  return (
    <>
      <h1>Case Login Form</h1>
      {/* <form className='loanApplicationForm'/> */}
      <form className='loanApplicationForm' onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className='column'>
        <div className='form-group'>
        <label>Date Of Login:</label>
    
      
       <div className='date'>
      <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

      <IonModal keepContentsMounted={true}>
        <IonDatetime id="datetime"></IonDatetime>
      </IonModal>
    
    </div>
    
   
   
        </div>
          <div className="form-group">
            <label>
              Channel Partner Code/Employee Id Of Case Owner:
              <input
                type="text"
                name="employeeIdOfCaseOwner"
                value={formData.employeeIdOfCaseOwner}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              First Name:
              <input
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Last Name:
              <input
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Manager Name:
              <input
                type="text"
                name="managerName"
                value={formData.managerName}
                onChange={handleChange}
              />
            </label>
          </div>

        

        </div>
        <div className='column'>
         
        <div className="form-group">
        <label>
          Upload Aadhar Card:
          <input
            type="file"
            name="aadharCard"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Upload Pan Card:
          <input
            type="file"
            name="panCard"
            onChange={handleFileChange}
          />
        </label>
      </div>

        {/* Add other form fields here */}

        <div className="form-group">
        <label>
        BranchName:
      <select
        name="branchName"
       value={formData.branchName}
       onChange={handleChange}
  >
      <option value="branch1">Noida</option>
      <option value="branch2">Jhandewalan</option>
      <option value="branch2">Bareily</option>
      <option value="branch2">Centralised Ops</option>
 
  </select>
</label>
        </div>
        <div className="form-group">
            <label>
        CustomerName:
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        CustomerContact:
          <input
            type="text"
            name="customerContact"
            value={formData.customerContact}
            onChange={handleChange}
          />
        </label>
        </div>
        </div>
        <div className='column'>
            <div className='form-group'>
            <label>
        Customer Mail:
          <input
            type="email"
            name="mailId"
            value={formData. mailId}
            onChange={handleChange}
          />
        </label>
            </div>
            <div className='form-group'>
            <label>
        CustomerPan:
          <input
            type="text"
            name="customerPan"
            value={formData. customerPan}
            onChange={handleChange}
          />
        </label>

        </div>
        <div className='form-group'>
        <label>
        CustomerPermanentAddress:
          <input
            type="text"
            name="customerPermanentAddress"
            value={formData. customerPermanentAddress}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='form-group'>
        <label>
        OfficeAddressWithPin:
          <input
            type="text"
            name="officeAddressWithPin"
            value={formData. officeAddressWithPin}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='form-group'>
     <label>Employment Type:</label>
    <select name='employementType' value={formData.  employementType} onChange={handleChange}>
    <option value='Salaried'>Salaried</option>
    <option value='partTime'>Self Employed</option>
    <option value='businessman'>Businessman</option>
    <option value='professional'>Professional</option>
  </select>
</div>
        </div>
        <div className='column'>
            <div className='form-group'>
            <label>
           State:
          <input
            type="text"
            name="state"
            value={formData. state}
            onChange={handleChange}
          />
        </label>
            </div>
            <div className='form-group'>
            <label>
        City:
          <input
            type="text"
            name="city"
            value={formData. city}
            onChange={handleChange}
          />
        </label>
            </div>
         <div className='form-group'>
         <label>
        CustomerOccupation:
          <input
            type="text"
            name="customerOccupation"
            value={formData. customerOccupation}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='form-group'>
         <label>
         CustomerDateOfBirth:
          <input
            type="date"
            name="customerDateOfBirth"
            value={formData. customerDateOfBirth}
            onChange={handleChange}
          />
        </label>
        </div>
        
        <label>
        RequiredLoanType:
      <select
      name="requiredLoanType"
      value={formData.requiredLoanType}
      onChange={handleChange}
    >
      <option value="personal">Personal Loan</option>
      <option value="home">Home Loan</option>
      <option value="home">Land Purchase Loan</option>
      <option value="education">Education Loan</option>
      <option value="education">Business Loan</option>
      <option value="education">Professional Loan</option>
      {/* Add more options as needed */}
    </select>
        </label>
        </div>
        <button className='nextbtn'>
        
        </button>
        
        <div className='column'>
            <div className='form-group'>
            <label>
         RequiredLoanAmount:
          <input
            type="text"
            name="requiredLoanAmount"
            value={formData. requiredLoanAmount}
            onChange={handleChange}
          />
        </label>
     </div>
     <div className="column">
     <div className="form-group">
        <label>
          Pending Document [If Any]:
          <input
            type="file"
            name="panCard"
            onChange={handleFileChange}
          />
        </label>
      </div>

     </div>
     <div className="form-group">
        <label>
          Upload Degree Registration:
          <input
            type="file"
            name="panCard"
            onChange={handleFileChange}
          />
        </label>
      </div>

     <div className='form-group'>
     <label>
      Latest CIBIL Score [Please Mention]:
      <input
        type="text"
        name="latestCIBILScore"
        value={formData.latestCIBILScore}
        onChange={handleChange}
        onBlur={() => setShowAlert(false)}
        placeholder={showAlert ? "if checked score in past/remember yourscore ." : ""}
      />
    </label>
    
        </div>
        <div className='form-group'>
        <label>
        BankingPassword:
          <input
            type="text"
            name="bankingPassAndOtherDocPass"
            value={formData. bankingPassAndOtherDocPass}
            onChange={handleChange}
          />
        </label>
        </div>
        <div>
        <div className="form-group">
        <label className='lender-label'><b>Which lender you want to choose:</b></label>
        
        {lenderOptions.map((lender, index) => (
          <div key={index} className="checkbox-option">
            <input
              type="radio"
              id={`lender-${index}`}
              value={lender.toLowerCase()} 
              checked={selectedLenders.includes(lender.toLowerCase())}
              onChange={handleLenderChange}
            />
            <label htmlFor={`lender-${index}`}>{lender}</label>
          </div>
         
        ))}
      </div>
      </div>
        <div className="form-group">
        <label>
        Remarks:
          <input
            type="text"
            name="remarks"
            value={formData. remarks}
            onChange={handleChange}
          />
        </label>
        </div>
        </div>
        
        </form>
        <form>
     
        <button className='btn' type="submit">Submit</button>
        {showNotification && (
        <div className="notification">
          Form submitted successfully!
        </div>
      )}
    </form>
        
  
        
      </>
   
  );
};

export default Caselogin;
