import React from 'react'
import { z, ZodType } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import './ZodFormComponent.css'

type FormType = {
  familyName: string
  email: string
  flatNo: string
  vehicleNo: string
  primary: string
  secodnary: string
  password: string
  confirmPassword: string
}
const ZodFormComponent = () => {
  const schema: ZodType<FormType> = z
    .object({
      familyName: z.string().min(2).max(30),
      email: z.string().email(),
      flatNo: z.string().min(3).max(4),
      vehicleNo: z.string().max(4),
      primary: z.string().min(10).max(13),
      secodnary: z.string().min(10).max(13),
      password: z.string().min(6).max(20),
      confirmPassword: z.string().min(6).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    })

  const { register, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  })

  const submitData = (data: FormType) => {
    console.log('It Worked', data)
  }
  return (
    <div className='formCard'>
      <form onSubmit={handleSubmit(submitData)}>
        <label>Family Name</label>
        <input type='text' {...register('familyName')} />
        <label>Email</label>
        <input type='text' {...register('email')} />
        <label>Flat no</label>
        <input type='text' {...register('flatNo')} />
        <label>vehicle No</label>
        <input type='text' {...register('vehicleNo')} />
        <label>Primary Phone</label>
        <input type='text' {...register('primary')} />
        <label>Secondary Phone</label>
        <input type='text' {...register('secodnary')} />
        <label>Password</label>
        <input type='password' {...register('password')} />
        <label>Confirm Password</label>
        <input type='password' {...register('confirmPassword')} />
        <input type='submit' />
      </form>
    </div>
  )
}

export default ZodFormComponent
