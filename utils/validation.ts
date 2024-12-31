// utils/validation.ts
export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const validatePhone = (phone: string): boolean => {
    return /^\d{11}$/.test(phone);
  };
  
  export const validateStudentId = (id: string): boolean => {
    return /^\d+$/.test(id);
  };