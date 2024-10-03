async function permittedCharacters(){
  let permited=[];
  
  if(process.env.UPPERCASE_LETTERS=="true"){
    permited.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"); 
  }
  if(process.env.LOWERCASE_LETTERS=="true"){//env
    permited.push(..."abcdefghijklmnopqrstuvwxyz");
  }
  if(process.env.NUMBERS=="true"){ //env
    permited.push(..."012345679");
  } 
  if(process.env.PASSWORD_LENGTH=="true"){//env
    permited.push(..."!@#$%^&*()-_");
  }  
  return permited;
}


async function handle(){
  let characters =[];
  let password ="";

  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = await permittedCharacters();

  for(let i=0;i<passwordLength;i++){
    const index = Math.floor(Math.random()*characters.length);  
    password += characters[index];
  }

  return password;
}

export default handle;