import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function VaultsListSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 rounded-lg bg-[#0a1229] border border-[#A8B2D1]/10"
          >
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-8 w-24" />
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
        <div className="flex gap-4 w-full md:w-auto">
          <Skeleton className="h-10 w-full md:w-64" />
          <Skeleton className="h-10 w-[140px]" />
          <Skeleton className="h-10 w-[140px]" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Skeleton className="h-10 w-[140px]" />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-[#0a1229]/50">
          <TabsTrigger
            value="hot"
            className="data-[state=active]:bg-[#ed796b] data-[state=active]:text-[#0A192F] text-[#A8B2D1]"
            disabled
          >
            Hot 🔥
          </TabsTrigger>
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-[#ed796b] data-[state=active]:text-[#0A192F] text-[#A8B2D1]"
            disabled
          >
            All Vaults
          </TabsTrigger>
          <TabsTrigger
            value="yours"
            className="data-[state=active]:bg-[#ed796b] data-[state=active]:text-[#0A192F] text-[#A8B2D1]"
            disabled
          >
            Your Vaults
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-lg bg-[#0a1229] p-6 border border-[#A8B2D1]/10 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-36" />
                    <Skeleton className="h-4 w-64" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-4">
                      <div className="space-y-1">
                        <Skeleton className="h-3 w-8 ml-auto" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <div className="space-y-1">
                        <Skeleton className="h-3 w-8 ml-auto" />
                        <Skeleton className="h-5 w-14" />
                      </div>
                    </div>
                    <div className="mt-2 space-y-1">
                      <Skeleton className="h-3 w-20 ml-auto" />
                      <Skeleton className="h-5 w-16 ml-auto" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
