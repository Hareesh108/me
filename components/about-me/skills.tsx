/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { Badge } from "../ui/badge";

export const Skills = ({
  skills,
}: {
  skills: {
    name: string;
    color: string;
    darkColor: string;
  }[];
}) => {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual skill badges
  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={badgeVariants as any}
          whileHover={{
            scale: 1.1,
            backgroundColor:
              currentTheme === "dark" ? skill.darkColor : skill.color,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            y: -5,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Badge
            variant="default"
            className="px-3 py-1 cursor-pointer dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300"
          >
            {skill.name}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  );
};
