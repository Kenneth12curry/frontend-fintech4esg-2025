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
  email: z.string().email('Please enter your email'),
});

export type FormValues = z.infer<typeof formSchema>;


/** function show pop-up */
import { toast } from 'react-toastify';

function showPopup(type: 'success' | 'error', message: string) {
  if (type === 'success') {
    toast.success(message);
  } else {
    toast.error(message);
  }
}


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
    const response = await sendNewsletterForm(data); // renvoie { success, message }

    if (!response.success) {
      showPopup('error', response.message); // Email déjà inscrit
    } else {
      form.reset();
      showPopup('success', response.message); // Inscription réussie
    }
  } catch (err: any) {
    showPopup('error', err.message || 'Une erreur inattendue est survenue.');
  }

    setIsSubmitting(false);
  };


  return (
 
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-row items-center justify-center gap-0 w-full mx-auto mb-6
                  max-w-xs sm:max-w-sm md:max-w-md"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <input
                  type="email"
                  {...field}
                  placeholder={form.formState.errors.email?.message || "example@email.com"}
                  className={`
                    w-full text-xs px-3 py-2
                    bg-gray-200 text-gray-700
                    rounded-l-xl border-none outline-none
                    focus:outline-none focus:ring-0
                    ${form.formState.errors.email ? "placeholder:text-red-500" : "placeholder:text-gray-400"}
                  `}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            text-white font-semibold text-xs px-4 py-2
            bg-gradient-to-r bg-[#19af58] hover:bg-primary
            rounded-r-xl transition duration-300 hover:opacity-90
            disabled:opacity-50
          `}
        >
          {isSubmitting ? "Sending..." : "Subscribe"}
        </button>
      </form>
    </Form>

  );
}
