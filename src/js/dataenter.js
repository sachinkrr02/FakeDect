    // reference your database
  var contactFormDB = firebase.database().ref("addproduct");
  
  document.getElementById("addproduct").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var manufacturerID = getElementVal("manufacturerID");
    var productName = getElementVal("productName");
    var ProductSN = getElementVal("ProductSN");
  
    saveMessages(manufacturerID, productName, ProductSN);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (manufacturerID, productName, ProductSN) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      manufacturerID: manufacturerID,
      productName: productName,
      ProductSN: ProductSN,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };