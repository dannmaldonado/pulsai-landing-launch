
import React from 'react';

const ProofBar = () => {
  return (
    <section className="bg-white py-8 md:py-10 border-y border-gray-100 relative">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-center text-lg text-secondary-500/70 font-medium mb-6">
            Empresas que já elevaram seus resultados com a PulsAI
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Placeholder logos - pode ser substituído por logos reais */}
            <div className="flex items-center justify-center h-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-md"></div>
                <span className="font-semibold text-secondary">CompanyA</span>
              </div>
            </div>
            <div className="flex items-center justify-center h-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
                <span className="font-semibold text-secondary">BrandB</span>
              </div>
            </div>
            <div className="flex items-center justify-center h-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-md"></div>
                <span className="font-semibold text-secondary">ServiceC</span>
              </div>
            </div>
            <div className="flex items-center justify-center h-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
                <span className="font-semibold text-secondary">TechD</span>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-10">
            <div className="bg-gradient-to-r from-primary-100 to-primary-50 py-3 px-8 rounded-full">
              <p className="text-primary-700 font-bold text-center flex items-center">
                <span className="text-xl mr-2">+38%</span> 
                <span>de leads convertidos em 60 dias após implementação</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofBar;
