import { object, string } from 'yup';

const CreateShortUrlValidation = object({
  body: object({
    destination: string().required('Destination is required'),
  }),
});

export { CreateShortUrlValidation };
