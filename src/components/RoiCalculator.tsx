
import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RoiCalculator = () => {
  const { toast } = useToast();
  const [attendants, setAttendants] = useState<number>(1);
  const [salary, setSalary] = useState<number>(2500);
  const [questionsPerMonth, setQuestionsPerMonth] = useState<number>(500);
  const [results, setResults] = useState({
    timeSaved: 0,
    moneySaved: 0,
    savingsPerYear: 0,
    calculated: false
  });

  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const handleCalculate = () => {
    // Lógica simplificada para calcular o ROI
    const avgTimePerQuestion = 5; // minutos
    const timeSavedPerMonth = (questionsPerMonth * avgTimePerQuestion) / 60; // horas/mês
    const hourlyCost = salary / 176; // salário dividido por horas médias trabalhadas no mês
    const moneySavedPerMonth = timeSavedPerMonth * hourlyCost * attendants;
    const savingsPerYear = moneySavedPerMonth * 12;

    setResults({
      timeSaved: Math.round(timeSavedPerMonth),
      moneySaved: Math.round(moneySavedPerMonth),
      savingsPerYear: Math.round(savingsPerYear),
      calculated: true
    });

    toast({
      title: "Cálculo realizado!",
      description: "Veja quanto sua empresa pode economizar com IA.",
    });
  };

  return (
    <section id="roi-calculator" className="section-padding bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary-100 p-3 rounded-full">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="section-heading text-center">Calculadora de ROI</h2>
          <p className="section-subheading text-center">
            Descubra quanto sua empresa pode economizar ao implementar nossa solução de IA
          </p>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Calcule sua economia</CardTitle>
              <CardDescription>
                Preencha os campos abaixo para simular o retorno sobre investimento
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="attendants">Número de atendentes</Label>
                  <Input
                    id="attendants"
                    type="number"
                    min="1"
                    value={attendants}
                    onChange={(e) => setAttendants(Math.max(1, parseInt(e.target.value) || 1))}
                    className="focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Salário médio mensal (R$)</Label>
                  <Input
                    id="salary"
                    type="number"
                    min="1"
                    value={salary}
                    onChange={(e) => setSalary(Math.max(1, parseInt(e.target.value) || 0))}
                    className="focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="questions">Perguntas por mês</Label>
                  <Input
                    id="questions"
                    type="number"
                    min="1"
                    value={questionsPerMonth}
                    onChange={(e) => setQuestionsPerMonth(Math.max(1, parseInt(e.target.value) || 0))}
                    className="focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <Button onClick={handleCalculate} className="w-full md:w-auto btn-primary">
                  Calcular Economia
                </Button>
              </div>

              {results.calculated && (
                <div className="mt-6 bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-secondary mb-4">Resultados estimados</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-secondary-500/70 text-sm mb-2">Tempo economizado por mês</p>
                      <p className="text-3xl font-bold text-primary">{results.timeSaved}</p>
                      <p className="text-sm text-secondary-500/80">horas</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-secondary-500/70 text-sm mb-2">Economia mensal</p>
                      <p className="text-3xl font-bold text-primary">{formatCurrency(results.moneySaved)}</p>
                      <p className="text-sm text-secondary-500/80">por mês</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-secondary-500/70 text-sm mb-2">Economia anual</p>
                      <p className="text-3xl font-bold text-primary">{formatCurrency(results.savingsPerYear)}</p>
                      <p className="text-sm text-secondary-500/80">por ano</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-4">
              <p className="text-sm text-center text-muted-foreground">
                Estes valores são estimativas baseadas em dados médios do mercado e podem variar conforme o cenário específico da sua empresa.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
