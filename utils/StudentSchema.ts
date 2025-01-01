// utils/validations/studentSchema.ts
import { z } from 'zod';

export const studentSchema = z.object({
  role: z.number()
    .optional(), // Marking it as optional
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters'),
  email: z.string()
    .email('Please enter a valid email'),
  studentId: z.string()
    .min(5, 'Student ID must be at least 5 digits')
    .regex(/^\d+$/, 'Student ID must contain only numbers'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
    ,
  confirmPassword: z.string(),
  contact: z.string()
    .length(11, 'Contact number must be exactly 11 digits')
    .regex(/^\d+$/, 'Contact number must contain only numbers'),
  batch: z.string()
    .regex(/^\d+$/, 'Batch must contain only numbers')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type StudentFormData = z.infer<typeof studentSchema>;