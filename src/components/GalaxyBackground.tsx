export const SquaresBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div 
        className="absolute inset-0 opacity-[0.8] dark:opacity-[0.5]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground) / 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground) / 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0',
          maskImage: 'radial-gradient(ellipse 100% 70% at 50% 50%, black 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 70% at 50% 50%, black 50%, transparent 100%)',
          animation: 'gridMove 20s linear infinite',
        }} 
      />
      <style>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }
      `}</style>
    </div>
  );
};

