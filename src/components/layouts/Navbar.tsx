"use client";

import Link from "next/link";
import DarkModeToggle from "../common/DarkModeToggle";
import { Button } from "antd";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-l from-blue-800 to-black text-white px-8 py-6 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-3">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
          <span role="img" aria-label="music">
            🎧
          </span>
        </motion.div>
        <h1 className="font-semibold text-2xl">SoundClient</h1>
      </div>

      <nav className="flex space-x-6">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/">
            <Button
              type="link"
              className="hover:text-yellow-300 transition-colors !font-bold text-white"
            >
              Home
            </Button>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/browse">
            <Button
              type="link"
              className="hover:text-yellow-300 transition-colors !font-bold !text-white"
            >
              Browse
            </Button>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/playlist/1">
            <Button
              type="link"
              className="hover:text-yellow-300 transition-colors !font-bold !text-white"
            >
              Playlist
            </Button>
          </Link>
        </motion.div>

        {/* Dark Mode Toggle */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <DarkModeToggle />
        </motion.div>

        {/* Login and Register Links */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/login">
            <Button
              type="link"
              className="hover:text-yellow-300 transition-colors !font-bold text-white"
            >
              Login
            </Button>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/register">
            <Button
              type="link"
              className="hover:text-yellow-300 transition-colors !font-bold text-white"
            >
              Register
            </Button>
          </Link>
        </motion.div>
      </nav>
    </header>
  );
}
