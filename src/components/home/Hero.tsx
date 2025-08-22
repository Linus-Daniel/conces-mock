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
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import { GiCash, GiGoldBar, GiCog } from "react-icons/gi";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"
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

      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-10 -top-10 w-64 h-64 md:w-72 md:h-72 bg-yellow-400 rounded-full filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute left-1/4 top-1/4 w-80 h-80 md:w-96 md:h-96 bg-indigo-500 rounded-full filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"
        ></motion.div>
      </div>

      {/* Notifications */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-between items-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-auto"
          >
            <div className="bg-yellow-500/90 text-blue-900 px-4 py-2  rounded-full text-center text-md sm:text-sm font-medium flex items-center justify-center shadow-md">
              <FaPaintBrush className="mr-2 flex-shrink-0" />
              <span className="">
                We're rebuilding! CTAs and features are coming soon.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-auto"
          >
            <Link href="https://brandchallenge.conces.org" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center justify-center cursor-pointer text-xs sm:text-sm"
              >
                <FaTrophy className="mr-2 flex-shrink-0" />
                <span className="truncate">Logo Design Contest Live!</span>
                <FaArrowRight className="ml-2 flex-shrink-0" />
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
              className="inline-flex items-center mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
            >
              <GiCog className="text-yellow-400 mr-2" />
              <span className="text-yellow-300 font-semibold text-xs sm:text-sm">
                Conference of Nigerian Christian Engineering Students and Alumni
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
            >
              Uniting <span className="text-yellow-400">Faith</span>,{" "}
              <span className="text-yellow-400">Engineering</span> &{" "}
              <span className="text-yellow-400">Purpose</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
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
              <p>
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 font-bold rounded-lg hover:shadow-xl transition-all shadow-lg flex items-center justify-center"
                >
                  <FaGraduationCap className="mr-2" />
                  Join as Student
                </motion.button>
              </p>
              <p>
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/30 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <FaUsers className="mr-2" />
                  Join as Alumnus
                </motion.button>
              </p>
            </motion.div>
          </div>

          {/* Image content */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  fill
                  className="object-contain drop-shadow-2xl"
                  src="/images/logo.png"
                  alt="CONCES logo"
                  priority
                />
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl scale-90 -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* Wowing Prize Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 sm:mt-20 bg-gradient-to-r from-yellow-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-yellow-400/30"
        >
          <div className="text-center mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
            >
              🏆 Grand Prize Announcement 🏆
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-yellow-300 font-medium"
            >
              Our logo design contest winner will receive:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: GiCash,
                title: "1st Winner",
                amount: "₦500,000",
                color: "text-green-400",
                delay: 0.1,
              },
              {
                icon: GiGoldBar,
                title: "Runner up",
                amount: " ₦250,000",
                color: "text-yellow-400",
                delay: 0.2,
              },
              {
                icon: FaAward,
                title: "₦Third Place",
                amount: "100,000",
                color: "text-blue-400",
                delay: 0.3,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all"
              >
                <div className={`text-4xl mb-4 ${item.color}`}>
                  <item.icon />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-2xl font-bold text-yellow-400 mb-2">
                  {item.amount}
                </p>
              
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link href="https://brandchallenge.conces.org" passHref>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-blue-900 font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center mx-auto"
              >
                <FaMedal className="mr-2" />
                Compete for these amazing prizes!
                <FaArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
