"use client"
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
}

const FloatingReward: React.FC<FloatingRewardProps> = ({
  icon: Icon,
  delay = 0,
  duration = 4,
}) => {
  return (
    <motion.div
      className="absolute text-gold-400"
      initial={{
        y: Math.random() * 200 + 100,
        x: Math.random() * 300 + 50,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        y: Math.random() * 150 + 50,
        x: Math.random() * 400 + 100,
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
      <Icon className="w-8 h-8" />
    </motion.div>
  );
};

const EventsLogoBanner: React.FC = () => {
  return (
    <section
      id="events"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"
    >
      {/* Floating elements */}
      <FloatingReward icon={GiCash} delay={0} />
      <FloatingReward icon={FaCrown} delay={1} />
      <FloatingReward icon={GiGoldBar} delay={1.5} />
      <FloatingReward icon={FaTrophy} delay={2} />
      <FloatingReward icon={SparklesIcon} delay={2.5} />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-400 rotate-45"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-purple-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center mb-6 px-4 py-2 bg-yellow-400/20 rounded-full border border-yellow-400/30"
          >
            <SparklesIcon className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="font-medium text-yellow-400">
              Major Event Alert
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
          >
            CONCES Logo <span className="text-yellow-400">Rebrand</span>{" "}
            Challenge
          </motion.h2>

          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-gray-200 text-xl md:text-2xl mb-8"
          >
            Design the future face of Christian Engineering & Technology
            students in Nigeria
          </motion.p>

          {/* Prize Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 rounded-2xl shadow-2xl">
              <FaCrown className="w-8 h-8 mr-4 text-white" />
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  Over ₦1,000,000
                </div>
                <div className="text-white/90 font-medium">
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
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            <div className="relative h-64 md:h-80">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fe568f5f4b-6023f8bab46c6f7178f3.png"
                alt="Logo design competition for CONCES"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-6 left-6 bg-yellow-500 text-black rounded-xl px-4 py-2 font-bold text-lg">
                Competition Opens: Oct 1, 2025
              </div>
              <div className="absolute bottom-6 right-6 bg-black/70 text-white rounded-lg px-4 py-2">
                <span className="text-sm font-medium">Submission Deadline</span>
                <div className="text-lg font-bold">Dec 15, 2025</div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center mb-4">
                    <CalendarIcon className="w-6 h-6 mr-3 text-yellow-400" />
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        Competition Period
                      </h4>
                      <p className="text-gray-300">
                        October 1 - December 15, 2025
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <MapPinIcon className="w-6 h-6 mr-3 text-yellow-400" />
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        Submission
                      </h4>
                      <p className="text-gray-300">Online via CONCES Portal</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <TrophyIcon className="w-6 h-6 mr-3 text-yellow-400" />
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        Winner Announcement
                      </h4>
                      <p className="text-gray-300">January 15, 2026</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <ClockIcon className="w-6 h-6 mr-3 text-yellow-400" />
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        Judging Period
                      </h4>
                      <p className="text-gray-300">
                        Dec 16, 2025 - Jan 14, 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prize Breakdown */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Prize Breakdown
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: FaCrown,
                      prize: "₦500,000",
                      place: "1st Place",
                      color: "from-yellow-500 to-orange-500",
                    },
                    {
                      icon: FaMedal,
                      prize: "₦300,000",
                      place: "2nd Place",
                      color: "from-gray-400 to-gray-600",
                    },
                    {
                      icon: FaTrophy,
                      prize: "₦200,000",
                      place: "3rd Place",
                      color: "from-amber-600 to-orange-700",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-gradient-to-br ${item.color} p-6 rounded-xl text-center text-white shadow-lg`}
                    >
                      <item.icon className="w-8 h-8 mx-auto mb-3" />
                      <div className="text-2xl font-bold mb-1">
                        {item.prize}
                      </div>
                      <div className="text-sm opacity-90">{item.place}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 mr-4"
                >
                  Register Now - It's Free!
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300"
                >
                  View Competition Rules
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            View All CONCES Events
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsLogoBanner;
