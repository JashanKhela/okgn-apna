"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Contact form submitted:", data);
    reset();
    // TODO: hook up EmailJS / serverless later
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#ee3042] mb-8">
          Send Us a Message
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-6 rounded-xl shadow-sm"
        >
          <Input
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
          <Input
            type="email"
            {...register("email", { required: true })}
            placeholder="Your Email"
          />
          <Textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
            rows={5}
          />
          <Button
            type="submit"
            className="bg-[#ee3042] hover:bg-[#d42a3a] text-white w-full"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
