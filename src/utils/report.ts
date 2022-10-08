const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(
      ({ getCLS, getFCP, getFID, getINP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFCP(onPerfEntry);
        getFID(onPerfEntry);
        getINP(onPerfEntry);
        getTTFB(onPerfEntry);
      }
    );
  }
};
export default reportWebVitals;
