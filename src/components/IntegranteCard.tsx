

interface IntegranteProps {
  nome: string;
  rm: string;
  descricao: string;
  foto: string;
  linkedin: string;
  github: string;
}

export default function IntegranteCard({ nome, rm, descricao, foto, linkedin, github }: IntegranteProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
        <img 
          src={foto} 
          alt={nome} 
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-1">{nome}</h2>
      <span className="text-sm text-gray-500 mb-3">{rm}</span>
      <p className="text-gray-600 mb-4 flex-grow">{descricao}</p>
      <div className="flex gap-4">
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img src="/img/linkedin.svg" alt="LinkedIn" className="w-10" />
        </a>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img src="/img/github.svg" alt="GitHub" className="w-10" />
        </a>
      </div>
    </div>
  );
}
