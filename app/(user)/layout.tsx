import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* Banner */}
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
