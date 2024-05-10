import Image from "next/image";

const Service = () => {
  const services = [
    {
      imgSrc: "/images/service/service_1.png",
      alt: "Free Shipping",
      description: "Free Shipping",
    },
    {
      imgSrc: "/images/service/service_2.png",
      alt: "24/7 Service",
      description: "24/7 SERVICE",
    },
    {
      imgSrc: "/images/service/service_3.png",
      alt: "Easy Return",
      description: "Easy Return",
    },
    {
      imgSrc: "/images/service/service_4.png",
      alt: "Online Payment",
      description: "Online Payment",
    },
  ];

  return (
    <section className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="overflow-hidden sm:rounded-lg">
              <div className="py-5 sm:p-6 items-center flex justify-center flex-col">
                <Image
                  src={service.imgSrc}
                  alt={service.alt}
                  width={80}
                  height={80}
                  loading='lazy'
                  className="w-20 h-20 dark:bg-white p-2 rounded-full"
                />
                <p className="mt-2 text-xl leading-9 font-semibold">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </section>
  );
};

export default Service;
