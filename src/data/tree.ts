export type TreeLink = {
  title: string;
  description?: string;
  url: string;
};

export type TreeCollection = {
  title: string;
  description?: string;
  emoji: string;
  links: TreeLink[];
};

export const TREES: Record<string, TreeCollection> = {
  awsug: {
    title: "AWS UG Mumbai August 2026 Talk",
    description: "Resources from my AgentCore talk",
    emoji: "🎤",
    links: [
      {
        title: "Slides",
        description: "Presentation deck",
        url: "https://susmitpy.github.io/talks/agentcore_policy",
      },
      {
        title: "GitHub Repo",
        description: "AgentCore Harness Policy Enforcement",
        url: "https://github.com/susmitpy/agentcore-policy-enforcement",
      },
      {
        title: "Cedar Demo",
        description: "Cedar policy demo",
        url: "https://youtu.be/zBZM8a5QW4E",
      },
      {
        title: "Dogwood Demo",
        description: "Dogwood policy demo",
        url: "https://youtu.be/pZC0gTDv5SE",
      }
    ],
  },
  me: {
    title: "About Me",
    emoji: "👨‍💻",
    links: [
      {
        title: "ForQuiz",
        description: "Quiz-led learning and readiness platform",
        url: "https://forquiz.fusebytes.in",
      },
      {
        title: "Portfolio",
        description: "Hint: You're already here on a page.",
        url: "https://susmitpy.github.io",
      },

      {
        title: "LinkedIn",
        url: "https://linkedin.com/in/susmit-vengurlekar",
      },
      {
        title: "Medium Blog",
        url: "https://susmitpy.medium.com",
      },
      {
        title: "GitHub",
        url: "https://github.com/susmitpy",
      },
      {
        title: "Resume",
        url: "https://bit.ly/susmit-resume",
      },
    ],
  },
};
