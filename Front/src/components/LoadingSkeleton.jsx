const LoadingSkeleton = () => {
  const styles = `
    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      gap: 3rem;
      background-color: #f5f5f5;
    }

    .skeleton-circles {
      display: grid;
      grid-template-columns: repeat(2, 80px);
      gap: 1rem;
    }

    .skeleton-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 1000px 100%;
      animation: shimmer 2s infinite;
    }

    .skeleton-text {
      width: 250px;
      height: 60px;
      border-radius: 8px;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 1000px 100%;
      animation: shimmer 2s infinite;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="loading-container">
        <div className="skeleton-circles">
          <div className="skeleton-circle"></div>
          <div className="skeleton-circle"></div>
          <div className="skeleton-circle"></div>
          <div className="skeleton-circle"></div>
        </div>
        <div className="skeleton-text"></div>
      </div>
    </>
  );
};

export default LoadingSkeleton;
