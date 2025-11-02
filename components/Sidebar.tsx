
import React from 'react';
import { Dossier } from '../types';
import { FileIcon } from './Icons';

interface SidebarProps {
  dossiers: Dossier[];
  onSelectDossier: (id: string) => void;
  selectedDossierId: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ dossiers, onSelectDossier, selectedDossierId }) => {
  return (
    <div className="h-full">
      <h2 className="text-xl mb-2 text-green-400">DOSSIER INDEX</h2>
      <nav>
        <ul>
          {dossiers.map(dossier => (
            <li key={dossier.id} className="mb-1">
              <button
                onClick={() => onSelectDossier(dossier.id)}
                className={`w-full text-left p-2 flex items-center transition-all duration-200 ${
                  selectedDossierId === dossier.id
                    ? 'bg-green-500/30 text-white'
                    : 'text-green-400 hover:bg-green-500/20 hover:text-white'
                }`}
              >
                <FileIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">{dossier.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
