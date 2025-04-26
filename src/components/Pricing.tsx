import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    features: [
      "Private board sharing",
      "5 GB Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    name: "Pro",
    price: "$10",
    period: "/month",
    popular: true,
    features: [
      "Private board sharing",
      "10 GB Storage",
      "Web Analytics (Advanced)",
      "Private Mode",
    ],
  },
  {
    name: "Enterprise",
    price: "$200",
    period: "/month",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High-Performance Network",
      "Private Mode",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
          <p className="text-virtualr-muted mt-4">
            Choose the plan that works best for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pricing-card relative ${
                plan.popular
                  ? "border-virtualr-accent"
                  : "border-white/20"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-virtualr-accent text-white text-sm px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-virtualr-muted">{plan.period}</span>
                </div>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-virtualr-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                Get started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;