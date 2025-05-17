"use client"
import Lottie from "lottie-react";
import logoAnimation from "../../animations/logoAnimation.json";

export default function Logo() {
  return <Lottie animationData={logoAnimation} loop={true} style={{ width: 150,}} />;
}
