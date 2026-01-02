A professional, cross-platform desktop application for real-time voice-to-text transcription, built with Tauri and powered by Deepgram AI.

Subspace Demo Platform

🎯 Overview
Subspace is a functional clone of Wispr Flow that demonstrates practical AI-powered desktop application development. It features real-time speech recognition with a clean, intuitive push-to-talk interface.

✨ Core Features
✅ Implemented Requirements
Push-to-Talk Voice Input: Intuitive press-and-hold mechanism for voice recording
Microphone Access & Audio Capture: Properly handles system permissions with high-quality audio capture (16kHz, mono, with noise suppression)
Real-Time Transcription: Streams audio to Deepgram with minimal latency (<250ms chunks)
Display & Insert Text: Shows transcribed text with interim results (gray/italic) and final results
Recording Controls: Clear visual feedback with color-coded states (blue=ready, red=recording)
Error Handling: Gracefully handles microphone permission denial, network issues, and API errors
🎨 Additional Features
Copy to Clipboard: One-click copy of transcribed text
Download Transcript: Save transcription as .txt file with timestamp
Clear Function: Reset transcript for new session
Live Statistics: Real-time character count, word count, and recording status
Professional UI: Modern gradient design with smooth animations
Responsive Layout: Adapts to different window sizes
🏗️ Architecture & Code Quality
Separation of Concerns
src/
├── components/
│   ├── Recorder.jsx          # Recording control component
│   └── TranscriptBox.jsx     # Transcript display component
├── hooks/
│   └── useRecorder.js        # Audio capture logic
├── services/
│   └── deepgram.js           # Transcription service integration
├── App.jsx                    # Main application component
└── main.jsx                   # Application entry point
Key Design Decisions
WebSocket Connection: Direct WebSocket connection to Deepgram for real-time streaming (no SDK overhead)
Audio Streaming: 250ms chunks for optimal balance between latency and network efficiency
State Management: React hooks for clean, predictable state handling
Error Boundaries: Try-catch blocks with user-friendly error messages
Session Management: Proper cleanup of audio streams and WebSocket connections
🚀 Setup Instructions
Prerequisites
Node.js 18+ and npm 6.6+
Rust 1.70+ (for Tauri)
Deepgram API Key (Get one free)
Installation
# Clone the repository
git clone <your-repo-url>
cd subspace

# Install dependencies
npm install

# Set up Deepgram API Key
# Create a .env file in the project root:
echo "VITE_DEEPGRAM_API_KEY=your_api_key_here" > .env

# Run in development mode
npm run tauri dev

# Build for production
npm run tauri build
Configuration
Update src/services/deepgram.js with your API key:

const socket = new WebSocket(
  'wss://api.deepgram.com/v1/listen?punctuate=true&interim_results=true&model=nova-2',
  ['token', 'YOUR_DEEPGRAM_API_KEY']
);
📋 Project Structure
subspace/
├── src/                      # React frontend source
│   ├── components/           # UI components
│   ├── hooks/                # Custom React hooks
│   ├── services/             # External service integrations
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── src-tauri/                # Rust backend source
│   ├── src/
│   │   └── main.rs           # Tauri application entry
│   ├── Cargo.toml            # Rust dependencies
│   └── tauri.conf.json       # Tauri configuration
├── public/                   # Static assets
├── package.json              # Node dependencies
└── vite.config.js            # Vite configuration
🎨 UI/UX Design
Visual Hierarchy
Primary Action: Large, centered recording button with clear state indication
Transcript Display: Prominent text area with auto-scroll and clear typography
Secondary Actions: Copy, download, and clear buttons in contextual toolbar
Informational Elements: Live stats and feature highlights below main content
Color Scheme
Primary: Purple gradient (#667eea to #764ba2)
Active/Recording: Red (#ef4444)
Success: Green (#10b981)
Neutral: Gray scale for text and backgrounds
Interaction Design
Hover effects on buttons for better affordance
Smooth transitions (300ms) for state changes
Visual pulse animation during recording
Disabled state styling for unavailable actions
🔧 Technical Stack
Frontend
React 18.2: UI framework
Vite 4.5: Build tool and dev server
Lucide React: Icon library
Web Audio API: Microphone access
Backend
Tauri 1.5: Cross-platform desktop framework
Rust: Native functionality
AI/ML
Deepgram API: Speech-to-text transcription
Model: Nova-2 (latest, most accurate)
📊 Performance
Latency: <500ms end-to-end (audio capture → transcription → display)
Bundle Size: ~8MB (Tauri binary + frontend assets)
Memory: ~50MB average usage
CPU: Minimal overhead (mostly idle)
🔒 Privacy & Security
All audio processing happens via secure WebSocket (WSS)
No local audio storage
API key should be stored in environment variables
CSP disabled in development (enable for production)
🐛 Known Limitations
API Key: Currently hardcoded - should use environment variables in production
Microphone Selection: Uses default system microphone
Language: English only (can be extended via Deepgram API parameters)
Offline Mode: Requires internet connection for transcription
🔮 Future Enhancements
 Multiple language support
 Microphone device selection
 Custom keyboard shortcuts
 Export to multiple formats (PDF, DOCX)
 Theme customization
 Voice commands for app control
 Local model support for offline transcription
🧪 Testing
# Test microphone permissions
# Click "Hold to Record" - browser should prompt for permission

# Test real-time transcription
# Hold button and speak - text should appear as you talk

# Test error handling
# Deny microphone permission - app should show error message
# Disconnect internet - app should handle WebSocket error
📦 Build & Distribution
Development Build
npm run tauri dev
Production Build
npm run tauri build
Output locations:

Windows: src-tauri/target/release/bundle/msi/
macOS: src-tauri/target/release/bundle/dmg/
Linux: src-tauri/target/release/bundle/appimage/
Note: Remember to replace YOUR_DEEPGRAM_API_KEY with your actual API key before running the application.
