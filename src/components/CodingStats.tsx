import React from "react";
import WakaTimeStats from "../components/WakaTimeStats";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const CodingStats = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex flex-col items-center sm:items-start">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
            Dashboard
          </h1>
          <p
            className="text-muted-foreground max-w-2xl mb-6 text-center sm:text-left animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Monitor your coding activity with WakaTime integration. See your
            stats, language usage, and coding patterns.
          </p>
          <div
            className="flex gap-4 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://wakatime.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Visit WakaTime
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/wakatime"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <GitHubLogoIcon className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </header>

        <main>
          <WakaTimeStats />
        </main>

        <footer
          className="mt-16 text-center text-sm text-muted-foreground animate-fade-in"
          style={{ animationDelay: "900ms" }}
        >
          <p>
            Built with precision and care. Powered by{" "}
            <a
              href="https://wakatime.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              WakaTime
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CodingStats;
