import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
    return (
        <div>
            
            <div className="flex-grow flex flex-col">{children}</div>
          
        </div>
    );
}