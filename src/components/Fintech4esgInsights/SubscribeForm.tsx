import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { sendNewsletterForm } from "@/services/newsLetters.service";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// Schéma de validation Zod
const formSchema = z.object({
  email: z.string().email('Invalid email'),
});

export type FormValues = z.infer<typeof formSchema>;

export default function SubscribeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await sendNewsletterForm(data);
      form.reset();
      alert('Subscription successfully!');
    } catch (err: any) {
      form.setError('root.serverError', { message: err.message });
    }
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex justify-center items-center gap-2 mb-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  placeholder={form.formState.errors.email?.message || "Enter Your Email"}
                  className={`border-none px-4 py-2 w-64 rounded-xl bg-gray-200 transition-all duration-150 ${
                    form.formState.errors.email ? "placeholder:text-red-500" : ""
                  }`}
                />
              </FormControl>
              {/* On masque FormMessage pour éviter doublon avec le placeholder */}
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="text-white bg-[#19af58] hover:bg-primary font-bold px-6 py-2 rounded-xl"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Subscribe'}
        </Button>
      </form>
    </Form>
  );
}
