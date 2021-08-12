const useGetParameters = (parameters) => {
  let outputParams = [];
  for (const param in parameters) {
    outputParams.push(`${param}=${parameters[param]}`);
  }
  return "?" + outputParams.join("&");
};

export default useGetParameters;
