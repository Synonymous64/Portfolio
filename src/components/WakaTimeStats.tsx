import React, { useState, useEffect } from "react";
import { Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FormattedWakaTimeStats } from "@/types/wakatime";
import {
  fetchWakaTimeStats,
  getMockWakaTimeStats,
} from "@/../../praj-portfolio/src/pages/api/wakaTimeApi";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const WakaTimeStats: React.FC = () => {
  const [stats, setStats] = useState<FormattedWakaTimeStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { toast } = useToast();

  // Get stats from WakaTime API or mock data for development
  const getStats = async () => {
    setLoading(true);
    setError(null);

    try {
      // Try to get the API key from environment variable first
      const envApiKey =
        typeof window !== "undefined"
          ? import.meta.env.VITE_WAKATIME_API_KEY ||
            import.meta.env.VITE_NEXT_PUBLIC_WAKATIME_API_KEY
          : "";

      // Use the environment API key or fallback to the stored key if available
      const keyToUse =
        envApiKey || apiKey || localStorage.getItem("wakaTimeApiKey") || "";

      if (!keyToUse) {
        // If no API key, show dialog to input one
        setIsDialogOpen(true);
        setLoading(false);
        return;
      }

      // Save the key for future use if it's from manual input
      if (keyToUse === apiKey && apiKey) {
        localStorage.setItem("wakaTimeApiKey", apiKey);
      }

      // Fetch stats from API
      const data = await fetchWakaTimeStats(keyToUse);
      setStats(data);
      toast({
        title: "Statistics loaded",
        description: "WakaTime statistics have been loaded successfully.",
      });
    } catch (err) {
      console.error("Failed to fetch WakaTime stats:", err);
      setError(
        "Failed to fetch WakaTime stats. Please check your API key and try again."
      );
      // toast({
      //   title: "Error loading statistics",
      //   description: "There was a problem fetching your WakaTime data.",
      //   variant: "destructive",
      // });

      // Use mock data in case of error
      setStats(getMockWakaTimeStats());
    } finally {
      setLoading(false);
    }
  };

  // Save API key and fetch stats
  const handleSaveApiKey = () => {
    if (apiKey) {
      localStorage.setItem("wakaTimeApiKey", apiKey);
      setIsDialogOpen(false);
      getStats();
    }
  };

  // Clear API key and reset stats
  const handleClearApiKey = () => {
    localStorage.removeItem("wakaTimeApiKey");
    setApiKey("");
    setStats(null);
    setIsDialogOpen(true);
  };

  // Fetch stats on component mount
  useEffect(() => {
    getStats();
  }, []);

  // Fetch stats when dialog is closed
  useEffect(() => {
    if (!isDialogOpen) {
      getStats();
    }
  }, [isDialogOpen]);

  // Loading state UI
  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto animate-fade-in">
        <div className="mb-4 flex items-center">
          <Laptop className="mr-2 h-6 w-6 animate-pulse-slow text-primary" />
          <h2 className="text-2xl font-semibold animate-pulse-slow">
            Loading coding stats...
          </h2>
        </div>
        <Card className="glass-card bg-white dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="h-24 rounded-md bg-secondary/50 dark:bg-secondary/30 animate-shimmer"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // No stats yet, but dialog is handled separately
  if (!stats && !isDialogOpen) {
    return null;
  }

  return (
    <>
      <div className="w-full max-w-6xl mx-auto animate-fade-in">
        {stats && (
          <>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <Laptop className="mr-2 h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Weekly Coding Stats</h2>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  Last update:
                  <span className="text-primary ml-1">{stats.lastUpdate}</span>
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearApiKey}
                  className="ml-2"
                >
                  Change API Key
                </Button>
              </div>
            </div>

            <p className="mb-4 text-muted-foreground">
              My <span className="text-primary font-medium">WakaTime</span> last
              7 days stats.
            </p>

            <Separator className="mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <StatsCard
                title="Start Date"
                value={stats.startDate}
                className="animate-fade-in"
                style={{ animationDelay: "100ms" }}
              />
              <StatsCard
                title="End Date"
                value={stats.endDate}
                className="animate-fade-in"
                style={{ animationDelay: "200ms" }}
              />
              <StatsCard
                title="Daily Coding Average"
                value={stats.dailyCodingAverage}
                className="animate-fade-in"
                style={{ animationDelay: "300ms" }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <StatsCard
                title="This Week Coding Time"
                value={stats.thisWeekCodingTime}
                className="animate-fade-in"
                style={{ animationDelay: "400ms" }}
              />
              <StatsCard
                title="Best Day Coding Time"
                value={`${stats.bestDayDate} (${stats.bestDayCodingTime})`}
                className="animate-fade-in"
                style={{ animationDelay: "500ms" }}
              />
              <StatsCard
                title="All Time Since Today"
                value={stats.allTimeSinceToday}
                className="animate-fade-in"
                style={{ animationDelay: "600ms" }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card
                className="glass-card overflow-hidden animate-fade-in bg-white dark:bg-gray-800"
                style={{ animationDelay: "700ms" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Languages</h3>
                  <div className="space-y-4">
                    {stats.languages.map((language) => (
                      <ProgressBar
                        key={language.name}
                        label={language.name}
                        percentage={language.percent}
                        colorClass={language.color}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card
                className="glass-card overflow-hidden animate-fade-in bg-white dark:bg-gray-800"
                style={{ animationDelay: "800ms" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Categories</h3>
                  <div className="space-y-4">
                    {stats.categories.map((category) => (
                      <ProgressBar
                        key={category.name}
                        label={category.name}
                        percentage={category.percent}
                        colorClass={category.color}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>

      {/* API Key Dialog */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => setIsDialogOpen(open)}
      >
        <DialogContent className="sm:max-w-md bg-white dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle>Enter your WakaTime API Key</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p className="text-sm text-muted-foreground">
              You can get your API key from your WakaTime account settings. It
              will be stored locally in your browser.
            </p>
            <Input
              id="apiKey"
              placeholder="WakaTime API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="col-span-3"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
          <DialogFooter>
            <Button onClick={handleSaveApiKey} disabled={!apiKey}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

// StatsCard Component
interface StatsCardProps {
  title: string;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  className,
  style,
}) => {
  return (
    <Card className={cn("glass-card overflow-hidden", className)} style={style}>
      <CardContent className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-1">
          {title}
        </h3>
        <p className="text-xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
};

export default WakaTimeStats;
