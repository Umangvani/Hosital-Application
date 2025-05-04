import { Phone } from 'lucide-react';

export default function EmergencyAmbulancePage() {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Background dots pattern (left side) */}
      <div className="absolute left-0 top-0 bottom-0 w-1/5 opacity-10">
        <div className="grid grid-cols-5 gap-4">
          {Array(100).fill(0).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-400"></div>
          ))}
        </div>
      </div>
      
      {/* Blue wave background (right side) */}
      <div className="absolute right-0 top-0 w-2/3 h-full">
        <svg viewBox="0 0 500 500" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M500,0 L500,500 L0,500 C150,400 300,450 400,300 C500,150 450,50 500,0 Z"
            fill="#E6F4FF"
          />
        </svg>
        
        {/* Yellow sun/circle */}
        <div className="absolute right-24 top-40 w-16 h-16 rounded-full bg-yellow-300"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-8 py-8">
        {/* Top Content Section */}
        <div className="w-full max-w-xl text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-2">
            24/7 Emergency<br />
            Ambulance Care with<br />
            Medulance
          </h1>
          
          <h2 className="text-cyan-400 text-xl font-medium mb-4">
            For Emergency Medical Service
          </h2>
          
          <p className="text-gray-600 max-w-md mb-6">
            Help / Rescues the Patient in case of the Emergency 
            situation by doing just a click. Medulance Ambulance 
            comes right in front of the door for help.
          </p>
          
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full w-full max-w-md mb-3 transition duration-300">
            BOOK NOW
          </button>
          
          <p className="text-gray-500 mb-2">or</p>
          
          <div className="w-full max-w-md">
            <h3 className="text-gray-800 font-medium text-lg mb-2">
              Call Our Assistance
            </h3>
            
            <a 
              href="tel:+918882978888" 
              className="flex items-center justify-center border border-cyan-400 text-cyan-500 py-3 px-4 rounded-lg w-full hover:bg-cyan-50 transition duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              <span className="font-medium">+91 88829 78888</span>
            </a>
          </div>
        </div>
        
        {/* Bottom Section - Ambulance Illustration */}
        <div className="w-full max-w-2xl flex justify-center">
          <div className="relative w-full">
            {/* Ambulance SVG */}
            <svg 
              viewBox="0 0 600 320" 
              className="w-full max-h-96"
              style={{ filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.1))" }}
            >
              {/* City background */}
              <rect x="10" y="240" width="580" height="2" fill="#D1D5DB" />
              
              {/* Buildings */}
              <rect x="50" y="120" width="40" height="120" fill="#b9e0f7" rx="2" />
              <rect x="55" y="130" width="10" height="10" fill="#9bd1f3" />
              <rect x="75" y="130" width="10" height="10" fill="#9bd1f3" />
              <rect x="55" y="150" width="10" height="10" fill="#9bd1f3" />
              <rect x="75" y="150" width="10" height="10" fill="#9bd1f3" />
              
              <rect x="100" y="140" width="30" height="100" fill="#b9e0f7" rx="2" />
              <rect x="105" y="150" width="8" height="8" fill="#9bd1f3" />
              <rect x="117" y="150" width="8" height="8" fill="#9bd1f3" />
              <rect x="105" y="165" width="8" height="8" fill="#9bd1f3" />
              <rect x="117" y="165" width="8" height="8" fill="#9bd1f3" />
              
              <rect x="220" y="110" width="50" height="130" fill="#b9e0f7" rx="2" />
              <rect x="225" y="120" width="10" height="10" fill="#9bd1f3" />
              <rect x="255" y="120" width="10" height="10" fill="#9bd1f3" />
              <rect x="225" y="140" width="10" height="10" fill="#9bd1f3" />
              <rect x="255" y="140" width="10" height="10" fill="#9bd1f3" />
              
              <rect x="400" y="130" width="40" height="110" fill="#b9e0f7" rx="2" />
              <rect x="405" y="140" width="10" height="10" fill="#9bd1f3" />
              <rect x="425" y="140" width="10" height="10" fill="#9bd1f3" />
              <rect x="405" y="160" width="10" height="10" fill="#9bd1f3" />
              <rect x="425" y="160" width="10" height="10" fill="#9bd1f3" />
              
              <rect x="450" y="150" width="30" height="90" fill="#b9e0f7" rx="2" />
              <rect x="455" y="160" width="8" height="8" fill="#9bd1f3" />
              <rect x="467" y="160" width="8" height="8" fill="#9bd1f3" />
              
              <rect x="500" y="120" width="40" height="120" fill="#b9e0f7" rx="2" />
              <rect x="505" y="130" width="10" height="10" fill="#9bd1f3" />
              <rect x="525" y="130" width="10" height="10" fill="#9bd1f3" />
              <rect x="505" y="150" width="10" height="10" fill="#9bd1f3" />
              <rect x="525" y="150" width="10" height="10" fill="#9bd1f3" />
              
              {/* Trees */}
              <circle cx="550" cy="220" r="15" fill="#a7d88c" />
              <rect x="547" y="225" width="6" height="15" fill="#bd9b7a" />
              
              <circle cx="580" cy="230" r="10" fill="#a7d88c" />
              <rect x="578" y="235" width="4" height="10" fill="#bd9b7a" />
              
              <circle cx="490" cy="235" r="12" fill="#a7d88c" />
              <rect x="487" y="240" width="5" height="12" fill="#bd9b7a" />
              
              {/* Ground */}
              <ellipse cx="300" cy="250" rx="180" ry="10" fill="#e5e7eb" />
              
              {/* Ambulance */}
              {/* Body */}
              <rect x="150" y="180" width="200" height="60" fill="#ffffff" rx="5" />
              
              {/* Front cab */}
              <path d="M350,240 L350,180 L400,180 C400,180 410,200 410,210 C410,220 410,240 410,240 L350,240" fill="#2563eb" />
              
              {/* Windows */}
              <rect x="360" y="190" width="30" height="20" fill="#93c5fd" rx="2" />
              <rect x="180" y="190" width="30" height="20" fill="#93c5fd" rx="2" />
              
              {/* Red cross */}
              <circle cx="300" cy="205" r="20" fill="#ef4444" />
              <rect x="290" y="195" width="20" height="5" fill="#ffffff" rx="2" />
              <rect x="297.5" y="187.5" width="5" height="20" fill="#ffffff" rx="2" />
              
              {/* Wheels */}
              <circle cx="200" cy="240" r="25" fill="#1e293b" />
              <circle cx="200" cy="240" r="15" fill="#9ca3af" />
              <circle cx="380" cy="240" r="25" fill="#1e293b" />
              <circle cx="380" cy="240" r="15" fill="#9ca3af" />
              
              {/* Lights */}
              <rect x="410" y="195" width="10" height="10" fill="#ef4444" rx="5" />
              <rect x="150" y="195" width="10" height="10" fill="#ef4444" rx="5" />
              
              {/* Top light */}
              <ellipse cx="300" cy="170" rx="15" ry="5" fill="#ef4444" />
              
              {/* Side stripe */}
              <rect x="150" y="210" width="200" height="10" fill="#2563eb" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}