
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Calculator as CalculatorIcon, Wallet, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Calculator = () => {
  const [assets, setAssets] = useState({
    cash: "",
    gold: "",
    silver: "",
    investments: "",
    business: ""
  });
  const [goldPrice] = useState(2100); // USD per ounce
  const [dinarPrice] = useState(450); // USD per dinar
  const [zakatAmount, setZakatAmount] = useState(0);
  const [dinarAmount, setDinarAmount] = useState(0);

  const calculateZakat = () => {
    const totalAssets = 
      parseFloat(assets.cash || "0") +
      parseFloat(assets.gold || "0") +
      parseFloat(assets.silver || "0") +
      parseFloat(assets.investments || "0") +
      parseFloat(assets.business || "0");

    const nisab = goldPrice * 2.9; // Approximately 85 grams of gold
    
    if (totalAssets >= nisab) {
      const zakat = totalAssets * 0.025; // 2.5%
      setZakatAmount(zakat);
      setDinarAmount(zakat / dinarPrice);
    } else {
      setZakatAmount(0);
      setDinarAmount(0);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setAssets(prev => ({
      ...prev,
      [field]: value
    }));
  };

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
              Zakat Calculator
            </h1>
            <p className="text-lg text-gray-600">
              Calculate your zakat obligation with precision using current gold prices and convert to digital dinar tokens.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="card-islamic">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <CalculatorIcon className="mr-2 h-5 w-5" />
                  Asset Information
                </CardTitle>
                <CardDescription>
                  Enter your zakatable assets in USD. All fields are optional.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cash">Cash & Bank Savings</Label>
                  <Input
                    id="cash"
                    type="number"
                    placeholder="0.00"
                    value={assets.cash}
                    onChange={(e) => handleInputChange("cash", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gold">Gold (USD Value)</Label>
                  <Input
                    id="gold"
                    type="number"
                    placeholder="0.00"
                    value={assets.gold}
                    onChange={(e) => handleInputChange("gold", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="silver">Silver (USD Value)</Label>
                  <Input
                    id="silver"
                    type="number"
                    placeholder="0.00"
                    value={assets.silver}
                    onChange={(e) => handleInputChange("silver", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investments">Investments & Stocks</Label>
                  <Input
                    id="investments"
                    type="number"
                    placeholder="0.00"
                    value={assets.investments}
                    onChange={(e) => handleInputChange("investments", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business">Business Assets</Label>
                  <Input
                    id="business"
                    type="number"
                    placeholder="0.00"
                    value={assets.business}
                    onChange={(e) => handleInputChange("business", e.target.value)}
                  />
                </div>

                <Button onClick={calculateZakat} className="btn-primary w-full">
                  Calculate Zakat
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {/* Current Rates */}
              <Card className="card-islamic">
                <CardHeader>
                  <CardTitle className="text-primary">Current Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gold Price:</span>
                      <span className="font-semibold">${goldPrice.toLocaleString()}/oz</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dinar Price:</span>
                      <span className="font-semibold">${dinarPrice.toLocaleString()}/dinar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nisab Threshold:</span>
                      <span className="font-semibold">${(goldPrice * 2.9).toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Zakat Calculation Results */}
              <Card className="card-islamic">
                <CardHeader>
                  <CardTitle className="text-primary">Zakat Calculation</CardTitle>
                </CardHeader>
                <CardContent>
                  {zakatAmount > 0 ? (
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-gradient-to-r from-primary-50 to-gold-50 rounded-lg">
                        <p className="text-lg text-gray-600 mb-2">Your Zakat Amount</p>
                        <p className="text-3xl font-bold text-primary">${zakatAmount.toFixed(2)}</p>
                        <p className="text-lg text-gold-600 font-semibold">
                          ≈ {dinarAmount.toFixed(3)} Dinar Tokens
                        </p>
                      </div>
                      
                      <div className="space-y-3 text-sm text-gray-600">
                        <p>• Zakat rate: 2.5% of eligible assets</p>
                        <p>• Your assets meet the nisab threshold</p>
                        <p>• Calculation based on current gold prices</p>
                      </div>

                      <Link to="/auth">
                        <Button className="btn-primary w-full">
                          <Wallet className="mr-2 h-4 w-4" />
                          Pay Zakat with Dinar Tokens
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="text-center p-6">
                      <p className="text-gray-600">
                        Calculate your zakat by entering your asset values above.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Information */}
              <Card className="card-islamic">
                <CardHeader>
                  <CardTitle className="text-sm text-primary">Important Notes</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-2">
                  <p>• This is a simplified calculation for guidance</p>
                  <p>• Consult with a scholar for complex situations</p>
                  <p>• Ensure assets have been held for one lunar year</p>
                  <p>• Deduct any outstanding debts from total assets</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Calculator;
