export const validateEmail = (email: string) =>{
  const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export const validatePassword = (password: string) =>{
  return password.length >= 6;
}

export const validateName = (name: string) =>{
  return name.trim().length > 0;
}

export const getInitials = (profileName) =>{
  if(!profileName) return "";

  const names = profileName.split(" ");
  let initials = names[0].charAt(0).toUpperCase();
  if(names.length > 1){
    initials += names[names.length - 1].charAt(0).toUpperCase();
  }
  return initials;
}