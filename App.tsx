
import React, { useState } from 'react';
import { Dossier } from './types';
import { DOSSIERS } from './constants';
import Sidebar from './components/Sidebar';
import ContentView from './components/ContentView';
import AiTerminal from './components/AiTerminal';

const App: React.FC = () => {
  const [selectedDossierId, setSelectedDossierId] = useState<string | null>(null);

  const selectedDossier = DOSSIERS.find(d => d.id === selectedDossierId) || null;

  return (
    <div className="min-h-screen w-full crt-scanlines p-2 sm:p-4 lg:p-6">
      <div className="border border-green-500/50 p-1">
        <div className="border-2 border-green-500/50 p-4">
          <header className="mb-4 text-center">
            <h1 className="text-3xl md:text-5xl text-green-400 animate-pulse">PROJECT MATRIX // DECLASSIFIED</h1>
            <p className="text-green-400/80">LEVEL 7 CLEARANCE REQUIRED</p>
          </header>

          <main className="flex flex-col lg:flex-row gap-4">
            <aside className="lg:w-1/4 w-full border border-green-500/50 p-2">
              <Sidebar 
                dossiers={DOSSIERS} 
                onSelectDossier={setSelectedDossierId}
                selectedDossierId={selectedDossierId}
              />
            </aside>

            <div className="lg:w-3/4 w-full flex flex-col gap-4">
              <section className="flex-grow border border-green-500/50 p-4 min-h-[300px] lg:h-[calc(50vh-5rem)] overflow-y-auto">
                <ContentView dossier={selectedDossier} />
              </section>
              <section className="border border-green-500/50 p-4 lg:h-[calc(50vh-5rem)]">
                <AiTerminal dossierContext={selectedDossier} />
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
