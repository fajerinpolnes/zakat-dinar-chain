
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Wallet, Users, Calculator, TrendingUp, ArrowLeft, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  // Mock data for demonstration
  const stats = {
    totalZakatPaid: 2450,
    dinarTokens: 5.44,
    recipientsHelped: 12,
    thisYearGoal: 3000
  };

  const recentTransactions = [
    {
      id: 1,
      date: "2024-01-15",
      amount: 450,
      dinar: 1.0,
      status: "Distributed",
      recipients: 3
    },
    {
      id: 2,
      date: "2024-01-01",
      amount: 900,
      dinar: 2.0,
      status: "Distributed",
      recipients: 5
    },
    {
      id: 3,
      date: "2023-12-15",
      amount: 1100,
      dinar: 2.44,
      status: "Distributed",
      recipients: 4
    }
  ];

  const progressPercentage = (stats.totalZakatPaid / stats.thisYearGoal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-white to-primary-50 islamic-pattern">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-600 transition-colors mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-primary mb-4 font-arabic">
              Dashboard
            </h1>
            <p className="text-lg text-gray-600">
              Track your zakat contributions and distribution impact
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="card-islamic">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Zakat Paid</CardTitle>
                <Wallet className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">${stats.totalZakatPaid.toLocaleString()}</div>
                <p className="text-xs text-gray-500">+12% from last year</p>
              </CardContent>
            </Card>

            <Card className="card-islamic">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Dinar Tokens</CardTitle>
                <TrendingUp className="h-4 w-4 text-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gold">{stats.dinarTokens} DIN</div>
                <p className="text-xs text-gray-500">Current holdings</p>
              </CardContent>
            </Card>

            <Card className="card-islamic">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Recipients Helped</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stats.recipientsHelped}</div>
                <p className="text-xs text-gray-500">Across 3 transactions</p>
              </CardContent>
            </Card>

            <Card className="card-islamic">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Year Progress</CardTitle>
                <Calculator className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{progressPercentage.toFixed(0)}%</div>
                <Progress value={progressPercentage} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Transactions */}
            <Card className="card-islamic">
              <CardHeader>
                <CardTitle className="text-primary">Recent Zakat Payments</CardTitle>
                <CardDescription>
                  Your latest zakat transactions and their distribution status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center">
                          <Wallet className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">${transaction.amount}</p>
                          <p className="text-sm text-gray-500">{transaction.dinar} DIN • {transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {transaction.status}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{transaction.recipients} recipients</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-islamic">
              <CardHeader>
                <CardTitle className="text-primary">Quick Actions</CardTitle>
                <CardDescription>
                  Manage your zakat and account settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/calculator">
                  <Button className="btn-primary w-full justify-start">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate New Zakat
                  </Button>
                </Link>
                
                <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-white">
                  <Users className="mr-2 h-4 w-4" />
                  View Recipients
                </Button>
                
                <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-white">
                  <Clock className="mr-2 h-4 w-4" />
                  Transaction History
                </Button>
                
                <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-white">
                  <Wallet className="mr-2 h-4 w-4" />
                  Wallet Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Year Goal Progress */}
          <Card className="card-islamic mt-8">
            <CardHeader>
              <CardTitle className="text-primary">2024 Zakat Goal</CardTitle>
              <CardDescription>
                Track your progress towards your annual zakat goal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress: ${stats.totalZakatPaid.toLocaleString()} of ${stats.thisYearGoal.toLocaleString()}</span>
                  <span className="font-semibold text-primary">{progressPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Started in January</span>
                  <span>${(stats.thisYearGoal - stats.totalZakatPaid).toLocaleString()} remaining</span>
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

export default Dashboard;
