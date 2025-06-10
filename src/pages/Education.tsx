
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { BookOpen, ArrowLeft, Calculator, Users, Shield, Wallet } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Education = () => {
  const articles = [
    {
      title: "Understanding Zakat: The Third Pillar of Islam",
      description: "Learn the fundamentals of zakat, its spiritual significance, and calculation methods.",
      readTime: "5 min read",
      icon: BookOpen
    },
    {
      title: "Why Dinar and Dirham in Modern Times?",
      description: "Discover the wisdom behind gold-backed currency and its relevance in blockchain technology.",
      readTime: "7 min read",
      icon: Calculator
    },
    {
      title: "Blockchain Technology and Islamic Finance",
      description: "How distributed ledgers align with Islamic principles of transparency and justice.",
      readTime: "6 min read",
      icon: Shield
    },
    {
      title: "Smart Contracts: The Future of Zakat Distribution",
      description: "Understanding automated zakat distribution through smart contracts.",
      readTime: "8 min read",
      icon: Wallet
    }
  ];

  const faqs = [
    {
      question: "How does ZakatChain ensure Shariah compliance?",
      answer: "ZakatChain operates under the guidance of certified Islamic scholars and follows established Islamic principles. Our smart contracts are designed to align with traditional zakat distribution rules, ensuring recipients fall into the eight categories mentioned in the Quran."
    },
    {
      question: "What are dinar tokens and how do they work?",
      answer: "Dinar tokens are ERC-20 tokens backed by physical gold, representing the traditional Islamic dinar. Each token maintains its value relative to gold prices, ensuring stability and adherence to Islamic monetary principles."
    },
    {
      question: "How are recipients verified?",
      answer: "Our platform uses AI-assisted verification combined with manual review by qualified administrators. Recipients must provide documentation proving their eligibility according to Islamic criteria for zakat recipients."
    },
    {
      question: "Is my zakat payment secure on the blockchain?",
      answer: "Yes, blockchain technology provides unprecedented security and transparency. All transactions are cryptographically secured and permanently recorded on the Ethereum network, making them tamper-proof and publicly verifiable."
    },
    {
      question: "Can I track where my zakat goes?",
      answer: "Absolutely! Every zakat payment is tracked from sender to recipient. You can view the complete transaction history and see exactly which verified recipients received your contribution."
    },
    {
      question: "What happens if I don't have enough for the nisab?",
      answer: "If your assets don't meet the nisab threshold (equivalent to 85 grams of gold), you're not obligated to pay zakat. Our calculator will inform you when you reach the minimum threshold."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-white to-primary-50 islamic-pattern">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-600 transition-colors mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-primary mb-4 font-arabic">
              Educational Resources
            </h1>
            <p className="text-lg text-gray-600">
              Learn about zakat, Islamic finance, and blockchain technology
            </p>
          </div>

          {/* Featured Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 font-arabic">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="card-islamic hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold rounded-lg flex items-center justify-center">
                        <article.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-primary">{article.title}</CardTitle>
                        <p className="text-sm text-gray-500">{article.readTime}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {article.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Zakat Basics */}
          <section className="mb-12">
            <Card className="card-islamic">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-arabic">Zakat Fundamentals</CardTitle>
                <CardDescription>
                  Essential knowledge about the third pillar of Islam
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">What is Zakat?</h3>
                    <p className="text-gray-600 text-sm">
                      Zakat is one of the Five Pillars of Islam, requiring Muslims to give 2.5% of their qualifying wealth 
                      to those in need. It purifies wealth and helps create a more equitable society.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Who Must Pay?</h3>
                    <p className="text-gray-600 text-sm">
                      Muslim adults who possess wealth above the nisab threshold for one lunar year. The nisab is 
                      equivalent to 85 grams of gold or 595 grams of silver.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Eight Categories</h3>
                    <p className="text-gray-600 text-sm">
                      The Quran specifies eight categories of zakat recipients: the poor, needy, zakat collectors, 
                      new Muslims, freeing slaves, debtors, in Allah's path, and travelers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Spiritual Benefits</h3>
                    <p className="text-gray-600 text-sm">
                      Zakat purifies the soul, increases blessings, and creates social solidarity. It reminds us 
                      that wealth is a trust from Allah.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 font-arabic">Frequently Asked Questions</h2>
            <Card className="card-islamic">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 rounded-lg px-4">
                      <AccordionTrigger className="text-left text-primary font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section>
            <Card className="card-islamic bg-gradient-to-r from-primary-50 to-gold-50">
              <CardContent className="text-center py-8">
                <h3 className="text-2xl font-bold text-primary mb-4 font-arabic">Ready to Calculate Your Zakat?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Use our smart calculator to determine your zakat obligation and pay securely using blockchain technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/calculator">
                    <Button className="btn-primary">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate Zakat
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Users className="mr-2 h-4 w-4" />
                      Join Platform
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Education;
