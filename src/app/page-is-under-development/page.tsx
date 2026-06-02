import Underdevelopment from "@/components/under-development/page";

const page = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-100">
      <Underdevelopment />
      <p className="font-serif text-xl leading-10 text-gray-400 font-bold text-wrap text-center">
        Building something worth the wait. The foundation is set, the design is
        taking shape, and this page will be ready to welcome you soon.
      </p>
    </section>
  );
};

export default page;
