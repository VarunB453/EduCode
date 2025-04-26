
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      monthlyPrice: "$0",
      annualPrice: "$0",
      period: "/month",
      description: "Perfect for beginners exploring the basics",
      features: [
        "Access to 5 programming languages",
        "Basic code editor",
        "Community forum access",
        "Limited exercises and challenges",
        "Progress tracking",
      ],
      buttonText: "Get started",
      buttonVariant: "secondary",
    },
    {
      name: "Pro",
      monthlyPrice: "$29",
      annualPrice: "$19",
      period: "/month",
      popular: true,
      description: "Ideal for dedicated learners seeking comprehensive skills",
      features: [
        "Access to all programming languages",
        "Advanced code editor with debugging",
        "Personalized learning paths",
        "Unlimited exercises and challenges",
        "Detailed performance analytics",
        "Downloadable resources",
        "Priority community support",
        "Monthly code reviews",
      ],
      buttonText: "Start 7-day free trial",
      buttonVariant: "primary",
    },
    {
      name: "Teams",
      monthlyPrice: "$79",
      annualPrice: "$59",
      period: "/month",
      description: "For teams looking to grow together",
      features: [
        "All Pro features included",
        "Team management dashboard",
        "Shared workspaces",
        "Custom learning tracks",
        "Team progress reports",
        "Private team forum",
        "Dedicated success manager",
        "API access",
        "SSO integration",
      ],
      buttonText: "Contact sales",
      buttonVariant: "secondary",
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can easily upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated amount for the remainder of your billing period. If you downgrade, the new rate will apply at the start of your next billing period.",
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! We offer a 50% discount for verified students. Simply sign up with your academic email address, and we'll guide you through the verification process to apply your discount.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and some regional payment methods. For Team and Enterprise plans, we can also arrange for invoicing with net-30 terms.",
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer a 30-day money-back guarantee for Pro subscriptions. If you're not satisfied with your experience, contact our support team within 30 days of your initial purchase for a full refund.",
    },
    {
      question: "Can I share my account with others?",
      answer: "No, our accounts are designed for individual use only. If you need access for multiple people, check out our Teams plan, which offers proper user management and collaboration features.",
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account settings page. Your account will remain active until the end of your current billing period.",
    },
  ];

  return (
    <div className="min-h-screen bg-educode-dark">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-educode-muted max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include access to our
            supportive community and regular platform updates.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <span className={`mr-3 ${isAnnual ? 'text-educode-muted' : 'text-educode-light font-medium'}`}>
            Monthly billing
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-educode-primary"
          />
          <span className={`ml-3 ${isAnnual ? 'text-educode-light font-medium' : 'text-educode-muted'}`}>
            Annual billing
          </span>
          {isAnnual && (
            <span className="ml-2 px-2 py-1 bg-educode-accent/20 text-educode-accent text-xs rounded-full">
              Save 35%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pricing-card relative ${
                plan.popular
                  ? "border-educode-primary"
                  : "border-white/20"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-educode-primary text-white text-sm px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-educode-muted">{plan.period}</span>
                </div>
                <p className="mt-3 text-educode-muted text-sm">{plan.description}</p>
              </div>
              
              <div className="my-8 border-t border-b border-white/10 py-4">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-educode-accent" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                className={`w-full ${
                  plan.buttonVariant === "primary" ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 rounded-xl"
        >
          <div className="md:flex justify-between items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Enterprise Solution</h3>
              <p className="text-educode-muted mb-6">
                Need a custom solution for your organization? Our Enterprise plan offers advanced features,
                dedicated support, and tailored learning experiences for large teams and educational institutions.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-educode-accent" />
                  <span>Custom branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-educode-accent" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-educode-accent" />
                  <span>Custom content development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-educode-accent" />
                  <span>LMS integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-educode-accent" />
                  <span>Dedicated success team</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-educode-accent" />
                  <span>SLA & premium support</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 text-center mt-6 md:mt-0">
              <a href="#" className="btn-primary inline-flex">
                Contact our sales team
              </a>
              <p className="text-educode-muted text-sm mt-2">
                Get a customized quote for your organization
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-educode-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-educode-muted mb-4">
              Still have questions about our pricing plans?
            </p>
            <a href="#" className="text-educode-accent hover:underline">
              Contact our support team &rarr;
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
