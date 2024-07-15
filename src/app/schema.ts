import z from 'zod';
export const FormSchema = z.object({
    'value': z.string().regex(/^[0-9]+$/, 'Must be a number.'),
})