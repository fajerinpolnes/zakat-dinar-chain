
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Wallet, Mail, ArrowLeft, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Auth = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    setIsConnecting(true);
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false);
      // Handle wallet connection logic here
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-white to-primary-50 islamic-pattern">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-md">
          <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-600 transition-colors mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-primary mb-4 font-arabic">
              Join ZakatChain
            </h1>
            <p className="text-gray-600">
              Connect your wallet or create an account to start managing your zakat
            </p>
          </div>

          <Card className="card-islamic">
            <CardHeader>
              <CardTitle className="text-center text-primary">Authentication</CardTitle>
              <CardDescription className="text-center">
                Choose your preferred method to access the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="wallet" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="wallet">Wallet</TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
                </TabsList>

                <TabsContent value="wallet" className="space-y-4">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center mx-auto">
                      <Wallet className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">Connect Crypto Wallet</h3>
                    <p className="text-sm text-gray-600">
                      Connect your MetaMask or compatible wallet to interact with smart contracts
                    </p>
                    
                    <Button 
                      onClick={connectWallet}
                      disabled={isConnecting}
                      className="btn-primary w-full"
                    >
                      {isConnecting ? "Connecting..." : "Connect Wallet"}
                    </Button>

                    <div className="text-xs text-gray-500 space-y-1">
                      <p>• MetaMask</p>
                      <p>• WalletConnect</p>
                      <p>• Coinbase Wallet</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="email" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Account Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="muzakki">Muzakki (Donor)</SelectItem>
                          <SelectItem value="mustahik">Mustahik (Recipient)</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="btn-primary w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Create Account
                    </Button>

                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <a href="#" className="text-primary hover:underline">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center text-xs text-gray-500">
                  <Shield className="mr-2 h-4 w-4" />
                  <span>
                    Your data is secured and Shariah-compliant. We follow Islamic privacy principles.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
