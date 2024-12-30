export interface StudentFormData {
    name: string;
    studentId: string;
    email: string;
    password: string;
    contactNumber: string;
    batch: string;
  }
  
  export interface TeacherFormData {
    name: string;
    email: string;
    password: string;
    contactNumber: string;
  }
  
  export interface LoginFormData {
    email: string;
    password: string;
  }