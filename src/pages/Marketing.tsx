const Marketing = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <iframe
        src="/marketing/index.html"
        title="DSM Marketing Portfolio"
        className="w-full h-full border-0"
        style={{ 
          width: '100vw', 
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999
        }}
        allowFullScreen
      />
    </div>
  );
};

export default Marketing;
