const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2 className="text-5xl font-bold text-center">
        Why <span className="text-yellow-400">Choose Us?</span>
      </h2>
      <div className="max-w-2xl  mx-auto">
        <ul className="p-2 text-lg mt-10 leading-8 list-disc text-justify md:text-left space-y-10">
          <li>
            <span className="text-2xl font-bold">Wide Selection: </span> We
            offer a vast array of tech products from renowned brands, ensuring
            that you can find everything you need in one place.
          </li>
          <li>
            <span className="text-2xl font-bold">Quality Assurance:</span>
            Our products are sourced from trusted brands, guaranteeing quality,
            durability, and superior performance.
          </li>
          <li>
            <span className="text-2xl  font-bold">Competitive Pricing: </span>{" "}
            We provide competitive prices and exclusive deals, allowing you to
            get the best value for your money.
          </li>
          <li>
            <span className="text-2xl  font-bold">Tech Support:</span>Our tech
            support team is available to assist you with any product setup,
            troubleshooting, or technical inquiries.
          </li>
          <li>
            <span className="text-2xl  font-bold">
              Community and Resources:
            </span>{" "}
            Join our tech community to access resources, reviews, and user
            guides, making your tech experience even more enjoyable and
            informative.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
