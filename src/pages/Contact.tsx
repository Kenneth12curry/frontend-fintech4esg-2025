import { useState, useEffect } from "react";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sendContactForm } from '@/services/contact.service';
import { useTranslation } from 'react-i18next';
import ReactSelect from 'react-select';
import { countries } from 'countries-list';
import { parsePhoneNumberFromString } from 'libphonenumber-js/core';
import { getCountryCallingCode } from 'libphonenumber-js';
import metadata from 'libphonenumber-js/min/metadata';
import { useMemo } from 'react';

// Schéma de validation Zod dynamique
const createFormSchema = (country: string) =>
  z.object({
    gender: z.string().min(1, 'Required'),
    lastName: z.string().min(2, 'Required'),
    firstName: z.string().min(2, 'Required'),
    jobTitle: z.string().min(2, 'Required'),
    companyName: z.string().min(2, 'Required'),
    verticals: z.string().min(2, 'Required'),
    email: z.string().email('Invalid email'),
    phone: z.string().refine(
      (value) => {
        const countryMetadata = metadata.countries[country as keyof typeof metadata.countries] ?? Object.values(metadata.countries)[0];
        const lengths = countryMetadata[10]; // Index pour les longueurs possibles
        const minLength = lengths ? Math.min(...lengths) : 6;
        const maxLength = lengths ? Math.max(...lengths) : 15;

        const cleanedValue = value.replace(/\D/g, '');
        return cleanedValue.length >= minLength && cleanedValue.length <= maxLength;
      },
      {
        message: `Phone number must be between ${
          (metadata.countries[country as keyof typeof metadata.countries]?.[10]?.length
            ? Math.min(...(metadata.countries[country as keyof typeof metadata.countries]?.[10] ?? []))
            : 6)
        } and ${
          (metadata.countries[country as keyof typeof metadata.countries]?.[10]?.length
            ? Math.max(...(metadata.countries[country as keyof typeof metadata.countries]?.[10] ?? []))
            : 15)
        } digits for ${country}.`,
      }
    ),
    country: z.string().min(2, 'Required'),
    products: z.string().min(2, 'Required'),
    businessNeed: z.string().min(2, 'Required'),
    type: z.string().min(2, 'Required'),
    message: z.string().min(5, 'Required'),
  });

export type FormValues = z.infer<ReturnType<typeof createFormSchema>>;

const countryData: Record<string, { flag: string; code: string }> = {
  FR: { flag: '🇫🇷', code: '+33' },
  US: { flag: '🇺🇸', code: '+1' },
  CA: { flag: '🇨🇦', code: '+1' }, // Ajout du Canada
  GB: { flag: '🇬🇧', code: '+44' },
  DE: { flag: '🇩🇪', code: '+49' },
  other: { flag: '🌍', code: '+' },
};

const getCountryOptions = () =>
  Object.entries(countries).map(([code, country]) => {
    let phoneCode = '';
    try {
      phoneCode = getCountryCallingCode(code as any);
    } catch (e) {
      phoneCode = '';
    }
    return {
      value: country.name, // ← utiliser le nom du pays comme value
      label: country.name,
      flag: `${String.fromCodePoint(
        ...Array.from(code).map((char) => 127397 + char.charCodeAt(0))
      )}`,
      phone: phoneCode,
    };
  });



import { useFormContext } from "react-hook-form";
interface CustomFormFieldProps {
  name: string;
  label: string;
  rows?: number;
  maxLength?: number;
  component?: React.ComponentType<any>; // Type générique pour les composants React
}
const CustomFormField = ({ name, label, rows = 6, maxLength = 200 }:CustomFormFieldProps) => {
  const { control } = useFormContext(); // Accède au contexte du formulaire

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel className="text-sm">{label}</FormLabel>
          <FormControl>
            <Textarea
              rows={rows}
              className="resize-none rounded-xl"
              {...field}
              onChange={(e) => {
                const newValue = e.target.value.slice(0, maxLength); // Limite à maxLength
                field.onChange(newValue);
              }}
            />
          </FormControl>
          <div className="text-right text-sm text-gray-500">
            {field.value?.length || 0} / {maxLength}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountryInfo, setSelectedCountryInfo] = useState(countryData.other);

  const form = useForm<FormValues>({
    resolver: zodResolver(createFormSchema('other')),
    defaultValues: {
      gender: '',
      lastName: '',
      firstName: '',
      jobTitle: '',
      companyName: '',
      verticals: '',
      email: '',
      phone: '',
      country: '',
      products: '',
      businessNeed: '',
      type: '',
      message: '',
    },
  });

  const selectedCountry = form.watch('country') || 'other';

  // Mettre à jour le resolver lorsque le pays change
  useEffect(() => {
    form.reset(form.getValues(), { keepValues: true });
    form.clearErrors();
    form.setValue('phone', ''); // Réinitialiser le champ phone
  }, [selectedCountry, form]);

  // Mémoriser les options des pays pour optimiser les performances
  const countryOptions = useMemo(() => getCountryOptions(), []);

 // Modifiez la fonction getPhoneLength
  const getPhoneLength = (countryCode: string) => {
  const countryData = metadata.countries[countryCode as keyof typeof metadata.countries];

  if (!countryCode || !countryData) {
    return { min: 6, max: 15 };
  }

  try {
    const lengths = countryData[10] || [];
    if (!lengths.length) {
      return { min: 6, max: 15 };
    }
    return {
      min: Math.min(...lengths),
      max: Math.max(...lengths),
    };
  } catch (error) {
    return { min: 6, max: 15 };
  }
};

  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Validation finale avec libphonenumber-js
      const phoneNumber = parsePhoneNumberFromString(
        `${selectedCountryInfo.code}${data.phone}`,
        selectedCountry as any,
        metadata
      );
      if (!phoneNumber || !phoneNumber.isValid()) {
        form.setError('phone', { message: 'Invalid phone number for the selected country.' });
        setIsSubmitting(false);
        return;
      }

      await sendContactForm(data);
      form.reset();
      alert('Formulaire envoyé avec succès!');
    } catch (err: any) {
      form.setError('root.serverError', { message: err.message });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Colonne gauche : infos contact */}
          <div className="flex flex-col items-start justify-start gap-8 w-full">
            <div>
              <h1 className="text-3xl mb-8 ms-8 text-primary uppercase font-bold">{t('title.contact')}</h1>
            </div>
          </div>

          {/* Colonne droite : titre secondaire + formulaire */}
          <div className="flex flex-col gap-6 w-full">
            <div className="rounded-lg p-4 mb-2 text-center">
              <p className="font-bold uppercase transform -translate-y-3">{t('title.photo_transformation1')}</p>
              <p className="font-bold transform -translate-y-2">{t('title.partner')}</p>
              <p>{t('title.photo_transformation3')}</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Première rangée */}
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">{t('title.gender')}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Title" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-300 rounded-xl">
                            <SelectItem value="Miss" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Miss</SelectItem>
                            <SelectItem value="Mrs." className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Mrs.</SelectItem>
                            <SelectItem value="Ms." className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Ms.</SelectItem>
                            <SelectItem value="Mr." className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Mr.</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">{t('title.lastName')}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-xl uppercase"
                            onChange={(e) => {
                              const uppercasedValue = e.target.value.toUpperCase();
                              field.onChange(uppercasedValue);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                 <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">{t('title.firstName')}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-xl capitalize"
                            onChange={(e) => {
                              const capitalizedValue = e.target.value
                                .toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join(' ');
                              field.onChange(capitalizedValue); // Met à jour la valeur dans react-hook-form
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      )}
                  />

                  {/* Deuxième rangée */}
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-sm">{t('title.job')}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Job Title" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-300 rounded-xl">
                            <SelectItem value="CEO" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Chief Executive Officer (CEO)</SelectItem>
                            <SelectItem value="COO" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Chief Operating Officer (COO)</SelectItem>
                            <SelectItem value="CFO" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Chief Financial Officer (CFO)</SelectItem>
                            <SelectItem value="CMO" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Chief Marketing Officer (CMO)</SelectItem>
                            <SelectItem value="CTO" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Chief Technology Officer (CTO)</SelectItem>
                            <SelectItem value="CIO" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Chief Information Officer (CIO)</SelectItem>
                            <SelectItem value="MD" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Managing Director (MD)</SelectItem>
                            <SelectItem value="ED" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Executive Director</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                 <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-sm">{t('title.company')}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-xl capitalize"
                            onChange={(e) => {
                              const capitalizedValue = e.target.value
                                .toLowerCase()
                                .split(' ')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join(' ');
                              field.onChange(capitalizedValue); // Met à jour la valeur dans react-hook-form
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="verticals"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-sm">{t('title.applies')}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Which verticals best applies to you ?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-300 rounded-xl">
                            <SelectItem value="Mobile Networks Operators" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Mobile Networks Operators</SelectItem>
                            <SelectItem value="International Organisations" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">International Organisations</SelectItem>
                            <SelectItem value="Government Structures" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Government Structures</SelectItem>
                            <SelectItem value="Financial Institutions" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Financial Institutions</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Troisième rangée */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-sm">{t('title.email')}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} className="rounded-xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-sm">{t('title.country')}</FormLabel>
                        <FormControl>
                          <ReactSelect
                            options={countryOptions}
                            value={countryOptions.find(
                              (option) => option.value === field.value
                            )}
                            onChange={(option) => {
                              field.onChange(option?.value);
                              const countryInfo = option
                                ? {
                                    flag: option.flag,
                                    code: `+${option.phone}`,
                                  }
                                : countryData.other;
                              setSelectedCountryInfo(countryInfo);
                              form.setValue('phone', ''); // Réinitialiser le champ phone
                            }}
                            formatOptionLabel={({ label, flag }) => (
                              <div className="flex items-center">
                                <span className="mr-2">{flag}</span>
                                <span>{label}</span>
                              </div>
                            )}
                            getOptionLabel={(option) => `${option.flag} ${option.label}`}
                            classNames={{
                              control: (state) =>
                                `border border-gray-300 rounded-md text-sm ${
                                  state.isFocused ? 'border-gray-500 shadow-sm' : ''
                                } focus:outline-none`, // Supprime la bordure bleue
                              menu: () => 'bg-white mt-1 rounded-md shadow-lg border border-gray-200',
                              option: (state) =>
                                `px-3 py-2 text-sm ${
                                  state.isFocused ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                }`, // Fond bleu pour l'option survolée, comme dans l'image
                              singleValue: () => 'flex items-center', // Assure que le drapeau et le texte sont bien alignés dans le champ
                            }}
                            isSearchable
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* 
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-sm">{t('title.phone')}</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-xl">
                              <span className="text-gray-500">
                                {selectedCountryInfo.flag}
                              </span>
                              <span className="ml-1">
                                {selectedCountryInfo.code}
                              </span>
                            </div>
                            <Input
                              className="rounded-xl"
                              placeholder="Phone number"
                              {...field}
                              onChange={(e) => {
                                const formattedValue = formatPhone(e.target.value, selectedCountry);
                                field.onChange(formattedValue);
                              }}
                              onBlur={() => validatePhoneNumber(field.value, selectedCountry)}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                        {selectedCountry && (
                          <div className="text-sm text-gray-500">
                            Expected length: {getPhoneLengthRange(selectedCountry).min}-
                            {getPhoneLengthRange(selectedCountry).max} digits
                          </div>
                        )}
                      </FormItem>
                    )}
                  /> */}
                

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => {
                      const phoneLength = getPhoneLength(selectedCountry);
                      const currentLength = field.value.replace(/\D/g, '').length;
                      const isMaxLength = currentLength >= phoneLength.max;

                      return (
                        <FormItem className="mt-4">
                          <FormLabel className="text-sm">{t('title.phone')}</FormLabel>
                          <FormControl>
                            <div className="flex flex-col gap-1">
                              <div className="flex">
                                <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl">
                                  <span className="text-gray-500">
                                    {selectedCountryInfo.flag}
                                  </span>
                                  <span className="ml-1">
                                    {selectedCountryInfo.code}
                                  </span>
                                </div>
                                <Input
                                type="tel"
                                className={`rounded-r-xl ${isMaxLength ? 'bg-gray-50' : ''}`}
                                placeholder="Phone number"
                                {...field}
                                onChange={(e) => {
                                  const cleaned = e.target.value.replace(/\D/g, '');
                                  try {
                                    const phoneNumber = parsePhoneNumberFromString(
                                      `${selectedCountryInfo.code}${cleaned}`,
                                      selectedCountry as any
                                    );
                                    
                                    if (phoneNumber) {
                                      const formatted = phoneNumber.formatNational();
                                      field.onChange(formatted);
                                    } else {
                                      field.onChange(cleaned);
                                    }
                                  } catch (error) {
                                    field.onChange(cleaned);
                                  }
                                }}
                              />
                              
                              </div>
                              {selectedCountry && (
                                <div className="text-xs text-gray-500 ml-1">
                                  {`${currentLength} / ${phoneLength.max} digits`}
                                </div>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  {/* Quatrième rangée */}
                  <FormField
                    control={form.control}
                    name="products"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-sm">{t('title.products')}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Which products are you interested in ?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-300 rounded-xl">
                            <SelectItem value="ReadyCash Suite" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">ReadyCash Suite</SelectItem>
                            <SelectItem value="ReadyScore" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">ReadyCash Score</SelectItem>
                            <SelectItem value="ReadyPay" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">ReadyPay</SelectItem>
                            <SelectItem value="P2P Power Mgmt" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">P2P Power Mgmt System</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessNeed"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-sm">{t('title.business')}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="What is your primary business need ?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-300 rounded-xl">
                            <SelectItem value="Lending Products" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Lending Products</SelectItem>
                            <SelectItem value="Saving Products" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Saving Products</SelectItem>
                            <SelectItem value="Energy Providers" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Energy Providers</SelectItem>
                            <SelectItem value="Merchant and Agent Loans" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Merchant and Agent Loans</SelectItem>
                            <SelectItem value="Others" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Others</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-sm">{t('title.type')}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-300 rounded-xl">
                            <SelectItem value="Demo" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl  focus:text-white">Demo</SelectItem>
                            <SelectItem value="Information" className="hover:bg-primary hover:text-white focus:bg-[#19af58] focus:rounded-xl focus:text-white">Information</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Champ de message */}
               <CustomFormField
                  name="message"
                  label="Message"
                  rows={6}
                  maxLength={200}
                  component={Textarea}
                />

                {/* reCAPTCHA */}
                <div className="border border-gray-300 p-2 max-w-xs rounded-xl">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2 text-[#19af58]" />
                    <span className="text-sm">{t('title.robot')}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-xs text-gray-500">reCAPTCHA</div>
                    <div className="text-xs text-gray-500">Privacy - Terms</div>
                  </div>
                </div>

                {/* Bouton de soumission */}
                <div>
                  <Button
                    type="submit"
                    className="bg-primary text-white bg-[#19af58] hover:bg-primary px-10 py-3 rounded-xl font-medium"
                    disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}