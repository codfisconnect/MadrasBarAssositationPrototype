import Srinivasan from "../assets/Srinivasan.jpeg"; // Adjust the relative path to match your folder structure
import priya from "../assets/priya.jpg";
import Aravind from "../assets/Aravind.jpeg";

const members = [
  {
    id: 1,
    userId: "MBA0001",
    password: "password123",

    name: "R. Srinivasan",
    designation: "Senior Advocate",
    enrollmentNo: "MS/1245/1998",

    email: "srinivasan@example.com",
    phone: "+91 98765 43210",

    practiceArea: "Civil Law, Constitutional Law",
    office: "Chennai High Court Campus",

    profileImage:
      Srinivasan,
  },

  {
    id: 2,
    userId: "MBA0002",
    password: "password456",

    name: "Priya Raman",
    designation: "Advocate",
    enrollmentNo: "MS/5678/2012",

    email: "priya@example.com",
    phone: "+91 98765 12345",

    practiceArea: "Family Law",
    office: "Madras High Court",

    profileImage:
      priya,
  },

  {
    id: 3,
    userId: "MBA0003",
    password: "password789",

    name: "K. Aravind Kumar",
    designation: "Advocate",
    enrollmentNo: "MS/7890/2018",

    practiceArea: "Criminal Law, Litigation",
    experience: "6+ Years",
    profileImage: Aravind,
    email: "aravind@example.com",
    phone: "+91 90000 11122",
    office: "Chennai High Court",
  },
];

export default members;
