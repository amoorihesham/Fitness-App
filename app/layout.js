import "./globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/Containers/Footer/Footer";

export const metadata = {
  title: "Fitness - App",
  description:
    "website For Search for All gym Exercises By Name, Category, Also Up to date Article On ho to keep your body fit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
