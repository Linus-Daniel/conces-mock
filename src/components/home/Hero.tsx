"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaPaintBrush,
  FaTrophy,
  FaMedal,
  FaAward,
} from "react-icons/fa";
import { GiCash, GiGoldBar } from "react-icons/gi";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative pt-28 md:pt-32 pb-24 md:pb-32 overflow-hidden bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <Image
          fill
          className="object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/856b1ebcc9-360a76c7ac3243855703.png"
          alt="abstract pattern"
          priority
        />
      </div>
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-gold-400 rounded-full filter blur-3xl"></div>
        <div className="absolute left-1/3 top-1/4 w-96 h-96 bg-royal-400 rounded-full filter blur-3xl"></div>
      </div>

      {/* Notifications - now responsive */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-auto"
          >
            <div className="bg-yellow-500/90 text-royal-900 px-4 py-2 rounded-full text-center text-xs sm:text-sm font-medium flex items-center justify-center">
              <FaPaintBrush className="mr-2" />
              <span>We're rebuilding! Exciting new features coming soon</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-auto"
          >
            <Link href="https://conces-contest.vercel.app" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-gold-500 to-orange-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center justify-center cursor-pointer text-xs sm:text-sm"
              >
                <FaTrophy className="mr-2" />
                <span>Logo Design Contest Live!</span>
                <FaArrowRight className="ml-2" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <span className="text-gold-300 font-semibold text-xs sm:text-sm">
                Conference of Nigerian Christian Engineering Students and Alumni
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
            >
              Uniting <span className="text-gold-400">Faith</span>,{" "}
              <span className="text-gold-400">Engineering</span> &{" "}
              <span className="text-gold-400">Purpose</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Where spiritual growth meets technical excellence. Join a
              community that nurtures both your faith and engineering career.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/join/student" passHref>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3 bg-gold-500 text-royal-900 font-bold rounded-lg hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl"
                >
                  Join as Student
                </motion.button>
              </Link>
              <Link href="/join/alumnus" passHref>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/30 transition-all shadow-lg hover:shadow-xl"
                >
                  Join as Alumnus
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Image content */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float"
            >
              <Image
                fill
                className="object-contain"
                src="/images/logo.png"
                alt="CONCES logo"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Wowing Prize Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 bg-gradient-to-r from-gold-600/20 to-royal-600/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gold-400/30"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              🏆 Grand Prize Announcement 🏆
            </h2>
            <p className="text-gold-300 font-medium">
              Our logo design contest winner will receive:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: GiCash,
                title: "Cash Prize",
                amount: "₦500,000",
                description: "Life-changing seed money",
                color: "text-green-400",
              },
              {
                icon: GiGoldBar,
                title: "Gold Package",
                amount: "Value ₦250,000",
                description: "Premium engineering tools",
                color: "text-yellow-400",
              },
              {
                icon: FaAward,
                title: "Career Boost",
                amount: "Exclusive Opportunities",
                description: "Industry recognition & mentorship",
                color: "text-blue-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10"
              >
                <div className={`text-4xl mb-4 ${item.color}`}>
                  <item.icon />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-2xl font-bold text-gold-400 mb-2">
                  {item.amount}
                </p>
                <p className="text-gray-300 text-sm sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="https://conces-contest.vercel.app" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-gold-500 to-orange-500 text-black font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <span className="flex items-center justify-center">
                  <FaMedal className="mr-2" />
                  Compete for these amazing prizes!
                  <FaArrowRight className="ml-2" />
                </span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
