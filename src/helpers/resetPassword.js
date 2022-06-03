
// New Password generator

function generetesPassword()
{ 
    const key = (Math.random () + 1).toString(36).substring(2).substring(0,10);
    
    const newPassword = key.replace('n', 'leo').replace('w', 'edu').replace('y','matheus');
  
    return newPassword;
  }
  
  export {generetesPassword};
  