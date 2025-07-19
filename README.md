# EverWell Landing Page

### 📝 A Note From Jeff:

Hey HealthPilot, 
Thanks so much for letting me participate in the interview process! I appreciated the challenge and I hope you find my work organized, clear and satisfactory. 
Stay cool and I hope to chat again!

## 🛠️ Technology Stack

### **Frontend Framework**

- **React** - Latest React 
- **TypeScript** - Type-safe development 
- **Vite** - Fast build tool

### **Styling & Design**

- **Tailwind CSS v3** - Utility-first CSS framework for rapid UI development
- **Custom Design System** - Brand-specific color palette and typography

### **Asset Management**

- **Static Assets** - PNG images for logos, icons, and UI elements
- **Environment Variables** - External URL configuration via Vite's `import.meta.env`

## 🔑 Key Implementation Highlights

### **🏗️ Architecture Overview**

```
src/
├── components/
│   ├── Header.tsx              # Navigation with logo and CTA button
│   ├── HeroSection.tsx         # Main hero with value proposition
│   ├── LeadCaptureSection.tsx  # Main lead capture container
│   ├── ContactForm.tsx         # Form component with validation
│   ├── SellingPoint.tsx        # Reusable selling point component
│   ├── ConfirmationMessage.tsx # Success state component
│   └── assets/
│       ├── everwell-logo.png
│       ├── checkmark.png
│       └── success-check.png
├── App.tsx                     # Top-level state management
├── main.tsx                    # Application entry point
└── index.css                   # Global styles and Tailwind imports
```

### **State Management Pattern**

```typescript
// Top-level state in App.tsx
const [isSubmitted, setIsSubmitted] = useState(false);
const [firstName, setFirstName] = useState("");

// Props passed down to components
<LeadCaptureSection
  isSubmitted={isSubmitted}
  firstName={firstName}
  setFirstName={setFirstName}
  onSubmit={handleSubmit}
/>;
```

### Remaining Known Bug:

- Alignment of SellingPoint Components on mobile is not aligned left perfectly vertical together, but rather centered!

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v18 or higher)
- npm or yarn package manager

### **Installation**

#### **From GitHub**

```bash
# Clone the repository
git clone https://github.com/yourusername/healthpilot-assessment-jeffpodmayer.git

# Navigate to project directory
cd healthpilot-assessment-jeffpodmayer

# Install dependencies
npm install
```

#### **From Zip File**

```bash
# Extract the zip file to your desired location

# Navigate to project directory
cd healthpilot-assessment-jeffpodmayer

# Install dependencies
npm install
```

### **Environment Variables**

The .env file should come with the ZIP, but if it does not -- Create a `.env` file in the root directory:

```env
VITE_HEALTHPILOT_URL=https://www.healthpilot.com/
```

### **Development**

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```
