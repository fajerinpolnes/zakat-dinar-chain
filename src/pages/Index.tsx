
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wallet, Users, Search, Shield, Calculator, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: Calculator,
      title: "Smart Zakat Calculator",
      description: "Calculate your zakat obligation with precision using real-time gold prices and dinar conversion."
    },
    {
      icon: Wallet,
      title: "Blockchain Transparency",
      description: "Every transaction is recorded on the blockchain, ensuring complete transparency and traceability."
    },
    {
      icon: Users,
      title: "Verified Recipients",
      description: "AI-assisted verification ensures your zakat reaches eligible mustahik efficiently."
    },
    {
      icon: Shield,
      title: "Shariah Compliant",
      description: "Built according to Islamic principles with guidance from certified scholars."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-white to-primary-50 islamic-pattern">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient font-arabic">
              ZakatChain
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-4 font-semibold">
              Revolutionize Zakat with Blockchain Transparency
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              A decentralized, transparent, and Shariah-compliant platform for zakat management using digital dinar tokens. 
              Ensure fair distribution to eligible recipients, powered by smart contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/calculator">
                <Button className="btn-primary text-lg px-8 py-4">
                  <Calculator className="mr-2 h-5 w-5" />
                  Pay Zakat Now
                </Button>
              </Link>
              <Link to="/education">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-arabic">
              Why Choose ZakatChain?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of zakat with our innovative blockchain-powered platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-islamic hover:transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-arabic">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to fulfill your zakat obligation with complete transparency
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Calculate Zakat</h3>
              <p className="text-gray-600">
                Use our smart calculator to determine your zakat obligation based on your assets and current gold prices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Convert to Dinar</h3>
              <p className="text-gray-600">
                Your zakat amount is converted to digital dinar tokens (ERC-20) for secure blockchain transactions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Smart Distribution</h3>
              <p className="text-gray-600">
                Smart contracts automatically distribute your zakat to verified recipients, ensuring transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-arabic">
            Ready to Transform Your Zakat?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Muslims who trust ZakatChain for transparent and efficient zakat management.
          </p>
          <Link to="/auth">
            <Button className="btn-secondary text-lg px-8 py-4">
              <Wallet className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
