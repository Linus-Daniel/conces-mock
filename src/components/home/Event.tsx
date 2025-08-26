"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  TrophyIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaMedal, FaTrophy, FaCrown } from "react-icons/fa";
import { GiCash, GiGoldBar } from "react-icons/gi";
import { IconType } from "react-icons";

interface FloatingRewardProps {
  icon: IconType | React.ComponentType<{ className?: string }>;
  delay?: number;
  duration?: number;
  size?: "sm" | "md" | "lg";
}

const FloatingReward: React.FC<FloatingRewardProps> = ({
  icon: Icon,
  delay = 0,
  duration = 4,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-6 h-6 sm:w-7 sm:h-7",
    lg: "w-7 h-7 sm:w-8 sm:h-8",
  };

  return (
    <motion.div
      className="absolute text-yellow-300"
      initial={{
        y: Math.random() * 200 + 100,
        x: Math.random() * 300 - 150,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        y: Math.random() * 150 + 50,
        x: Math.random() * 400 - 200,
        opacity: [0, 1, 1, 0],
        scale: [0, 1.2, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 3,
      }}
    >
      <Icon className={sizeClasses[size]} />
    </motion.div>
  );
};

const EventsLogoBanner: React.FC = () => {
  return (
    <section
      id="events"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"
    >
      {/* Floating elements - more for better visual impact */}
      <FloatingReward icon={GiCash} delay={0} size="sm" />
      <FloatingReward icon={FaCrown} delay={1} size="lg" />
      <FloatingReward icon={GiGoldBar} delay={1.5} size="md" />
      <FloatingReward icon={FaTrophy} delay={2} size="lg" />
      <FloatingReward icon={SparklesIcon} delay={2.5} size="sm" />
      <FloatingReward icon={GiCash} delay={3} size="md" />
      <FloatingReward icon={FaCrown} delay={3.5} size="sm" />
      <FloatingReward icon={GiGoldBar} delay={4} size="lg" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 border-2 border-yellow-400 rotate-45"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 left-10 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 border-2 border-purple-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-14 h-14 border-2 border-blue-300 rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 bg-yellow-400/20 rounded-full border border-yellow-400/30"
          >
            <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
            <span className="text-sm sm:text-base font-medium text-yellow-400">
              Major Event Alert
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight"
          >
            CONCES Logo <span className="text-yellow-400">Rebrand</span>{" "}
            Challenge
          </motion.h2>

          <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto mb-6 sm:mb-8"></div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-4xl mx-auto text-gray-200 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8"
          >
            Design the future face of Christian Engineering & Technology
            students in Nigeria
          </motion.p>

          {/* Prize Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
              <FaCrown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2 sm:mr-3 md:mr-4 text-white" />
              <div className="text-center">
                <div className="text-xl  sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Over ₦1,000,000
                </div>
                <div className="text-white/90 text-sm sm:text-base font-medium">
                  in Total Prizes!
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Event Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-white/20">
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fe568f5f4b-6023f8bab46c6f7178f3.png"
                alt="Logo design competition for CONCES"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-yellow-500 text-black rounded-lg sm:rounded-xl px-3 py-1 sm:px-4 sm:py-2 font-bold text-sm sm:text-base md:text-lg">
                Competition Opens: Sept 7, 2025
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black/70 text-white rounded-md sm:rounded-lg px-3 py-1 sm:px-4 sm:py-2">
                <span className="text-xs sm:text-sm font-medium">
                  Submission Deadline
                </span>
                <div className="text-base sm:text-lg font-bold">
                  Oct 7, 2025
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <div className="flex items-start mb-4">
                    <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-yellow-400 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-base sm:text-lg">
                        Competition Period
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        September 7 - October 7, 2025
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-yellow-400 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-base sm:text-lg">
                        Submission
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        Online via CONCES Portal
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start mb-4">
                    <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-yellow-400 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-base sm:text-lg">
                        Voting Period
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        Oct 8, 2025 - Nov 4, 2025
                      </p>
                    </div>
                  </div>

                  <div className=" md:mt-0">
                    <div className="flex items-start mb-4">
                      <TrophyIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-yellow-400 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold text-base sm:text-lg">
                          Grand Finale
                        </h4>
                        <p className="text-gray-300 text-sm sm:text-base">
                          November 7, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prize Breakdown */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
                  Prize Breakdown
                </h3>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    {
                      icon: FaCrown,
                      prize: "₦500,000",
                      place: "1st Place",

                      
                      color: "from-yellow-500 to-orange-500",
                    },
                    {
                      icon: FaMedal,
                      prize: "₦150,000",
                      place: "2nd Place",
                      color: "from-gray-400 to-gray-600",
                    },
                    {
                      icon: FaTrophy,
                      prize: "₦100,000",
                      place: "3rd Place",
                      color: "from-amber-600 to-orange-700",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-gradient-to-br ${item.color} p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl text-center text-white shadow-md sm:shadow-lg`}
                    >
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 sm:mb-3" />
                      <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                        {item.prize}
                      </div>
                      <div className="text-xs sm:text-sm opacity-90">
                        {item.place}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
                <motion.a
                  href="https://brandchallenge.conces.org/signup"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Register Now - It's Free!
                </motion.a>

                <motion.a
                  href="https://brandchallenge.conces.org"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 text-center"
                >
                  View Competition Rules
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsLogoBanner;
