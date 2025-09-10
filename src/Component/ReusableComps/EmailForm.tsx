import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EmailForm = () => {
  const {
    register,
    handleSubmit,
  
  } = useForm<Inputs>();

  const handleSubmitEmail: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div
        className="text-center mb-10"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1 className="md:text-3xl text-xl font-bold text-gray-700 ">
          Start a Conversation
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Have a project idea, a question, or just want to say hi? Drop me a
          message and I’ll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit(handleSubmitEmail)} className="space-y-2">
        <div className="grid grid-cols-1 md:gap-3 gap-2 md:grid-cols-2 sm:w-full">
          <input
            type="text"
            {...register("name", { required: "Name is Required" })}
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 w-full"
            required
          />
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 w-full"
            required
          />
        </div>
        <input
          type="text"
          {...register("subject", { required: true })}
          placeholder="Subject"
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 w-full"
          required
        />
        <textarea
          placeholder="Your Message"
          {...register("message", { required: true })}
          rows={5}
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 w-full"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-lg hover:bg-blue-700 w-full "
          title="Static only. Backend coming soon!"
        >
          Send Message
        </button>

      </form>
    </div>
  );
};

export default EmailForm;
