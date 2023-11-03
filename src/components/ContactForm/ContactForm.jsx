import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { schemaContactForm } from 'utils/shema';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaContactForm),
  });

  const items = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = preData => {
    const data = {
      name: preData.name,
      number: preData.phone,
    };
    const isContactExist = items.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (isContactExist) {
      toast.error(`${data.name} is already in contacts`);
      return;
    }

    dispatch(addContact(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Name
        <input {...register('name')} />
        <p>{errors.name?.message}</p>
      </Label>
      <Label>
        Phone
        <input {...register('phone')} />
        <p>{errors.phone?.message}</p>
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );
};
