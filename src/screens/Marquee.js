const Marquee = () => {
  return (
    <div style={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: '100%',
      background: 'Red',
    }}>
      <div style={{
        display: 'inline-block',
        paddingLeft: '100%',
        animation: 'scroll-left 15s linear infinite',
      }}>
        <span style={{ padding: '0 2rem', fontWeight: 'bold',color:'White' }}>
          🎉 Welcome to Einstein Arts And Science College! 🎉
        </span>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
