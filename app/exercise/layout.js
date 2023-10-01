import Navbar from "@/components/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
