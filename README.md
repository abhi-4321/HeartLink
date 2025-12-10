# **Heart Link Backend — TypeScript, Express.js**

This is the backend server for the Heart Link Android app.  
It handles authentication, mood tracking, chat, user connections, notifications, media uploads, and other core app functionalities.

Built using **TypeScript**, **Express.js**, **MongoDB** with **Mongoose**, **AWS S3**, **Firebase Cloud Messaging (FCM)**, and **Multer** for file uploads.

---

## **Quick Start**

This backend is intended for internal use only and is not publicly available for cloning.  
Deployment and usage instructions are internal and managed by the development team.

---

## **Key Features**

🔐 **Authentication** – Login, registration, and JWT-based auth  
👤 **User Management** – Profile CRUD, partner details, and preferences  
🔗 **Connection Module** – Validates connection codes and manages paired users  
🏠 **Mood System** – Real-time mood updates via WebSocket + FCM  
📊 **Mood History** – Stores previous moods, supports pagination  
💬 **Chat** – Real-time messaging via WebSocket with FCM push notifications  
🖼️ **Media Uploads** – Multer + AWS S3 for profile pictures and media  
⚙️ **Notifications** – Firebase Cloud Messaging for real-time events  

---

## **How the System Works**

🧩 **Architecture**  
MVC + service layer with repository pattern for MongoDB access.  

📡 **WebSocket & FCM Integration**  
WebSocket manages real-time chat and connection events; FCM ensures users receive updates even when offline.  

💾 **Database**  
MongoDB stores users, moods, chat messages, and connections; Mongoose defines schemas and handles queries.  

🖼️ **File Uploads**  
Multer processes incoming files and uploads them to AWS S3.  

🔐 **Authentication & Security**  
JWT-based authentication with middleware for protected routes.  

---

## **Getting Started**

This backend is for internal development and deployment only.  
Internal guides cover server setup, WebSocket configuration, FCM integration, and database management.

---

## **Best Practices**

⚡ **TypeScript** – Strong typing across models, controllers, and services  
📦 **Service Layer** – Separates business logic from route handling  
🛠️ **Environment Configuration** – `.env` used for all sensitive keys  
🔄 **Real-Time + Push Notifications** – WebSocket for instant updates, FCM for offline notifications  
💾 **MongoDB + Mongoose** – Reliable data persistence and schema validation  

---

## **Future Improvements**

📈 Analytics for moods and chat activity  
🔐 End-to-end encrypted chat  
🎥 Support for media sharing in chat  

---

## **Author**

Backend developed using TypeScript, Express.js, MongoDB, Mongoose, AWS S3, FCM, and Multer.  
This repository is private and not intended for public cloning.
