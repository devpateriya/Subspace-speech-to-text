# Subspace Voice-to-Text (Wispr Flow Clone)

This project is a cross-platform desktop application built using Tauri and React that implements real-time voice-to-text transcription using Deepgram.

The focus of this assignment is on the core push-to-talk voice workflow rather than UI polish or advanced system-level features.

## Project Overview

The goal of this assignment was to build a functional AI-powered desktop application that captures microphone audio, streams it in real time, and displays transcribed text with low latency.

The application demonstrates practical integration of real-time speech recognition into a desktop environment using modern tools.

## Core Features

### Push-to-Talk Voice Input
The application provides a simple start and stop recording workflow for voice input.

### Microphone Access and Audio Capture
Microphone permissions are handled using the Web Audio API, and audio is captured in real time from the system’s default microphone.

### Real-Time Transcription
Captured audio is streamed to Deepgram using a WebSocket connection to enable near real-time speech-to-text conversion.

### Live Transcript Display
The application displays interim transcription results while the user is speaking and shows finalized text once speech is confirmed.

### Clear Recording Controls
The recording state is easy to understand with predictable start and stop behavior.

### Graceful Error Handling
Common failures such as microphone permission denial, network interruptions, or API errors are handled without crashing the application.

## Architecture and Design

The codebase is structured to maintain a clear separation of concerns.

UI rendering, recording state management, audio capture, and transcription logic are implemented in separate modules to keep the code clean and maintainable.

Tauri was chosen over Electron to ensure a smaller bundle size and better runtime performance.

Real-time transcription is implemented using WebSocket streaming rather than file-based uploads to minimize latency.

## Real-Time Transcription Behavior

Live speech recognition produces interim results that may change as additional audio context is received.

This behavior is expected in real-time speech-to-text systems and is consistent with production dictation tools.

Short pauses during speech generally improve transcription accuracy.

## Technology Stack

Frontend: React with Vite  
Desktop Framework: Tauri  
Audio Processing: Web Audio API  
Speech-to-Text: Deepgram Streaming API  
Language: JavaScript  

## How to Run the Project

To run this project locally, the system must have Node.js, Rust, and Tauri prerequisites installed.

After installing project dependencies and configuring a Deepgram API key, the application can be launched in development mode and will open as a desktop window.

### Installation

Clone the repository and install dependencies:

```bash
git clone <your-repository-url>
cd wispr-flow-clone
npm install

## Demo Video

A short demo video demonstrates the complete workflow, including starting a recording, speaking while live transcription appears, stopping the recording, and viewing the final transcript.

## Known Limitations

The application requires an active internet connection and uses the default system microphone.

Transcription is currently limited to the English language.

Push-to-talk functionality works within the application window and does not include global hotkeys.

## Background

I have previously implemented speech-to-text functionality using Google Speech APIs in an interview simulation system.

That experience helped in designing the real-time audio streaming and WebSocket-based transcription workflow used in this project.

## Conclusion

This project prioritizes correctness, clean architecture, and maintainability over visual polish, in line with the assignment requirements.

It demonstrates the ability to integrate modern AI services into a practical desktop application.
