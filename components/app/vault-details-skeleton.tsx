import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function VaultDetailsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-8 w-48" />

          {/* Vault Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 ml-auto bg-[#0a1229]/80 border border-[#A8B2D1]/10 rounded-full">
            <Skeleton className="h-2.5 w-2.5 rounded-full" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content - Left and Middle Columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vault Overview */}
            <div className="rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229] p-6">
              <div className="grid gap-4 md:grid-cols-3 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-28 mb-2" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                ))}
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5 mt-2" />
            </div>

            {/* Deposit/Withdraw Section */}
            <div className="rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229] p-6">
              <Tabs defaultValue="deposit" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-[#0a1229]/50">
                  <TabsTrigger
                    value="deposit"
                    className="data-[state=active]:bg-[#ed796b] data-[state=active]:text-[#0A192F] text-[#A8B2D1]"
                    disabled
                  >
                    Deposit
                  </TabsTrigger>
                  <TabsTrigger
                    value="withdraw"
                    className="data-[state=active]:bg-[#ed796b] data-[state=active]:text-[#0A192F] text-[#A8B2D1]"
                    disabled
                  >
                    Withdraw
                  </TabsTrigger>
                </TabsList>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-12 w-full rounded-md" />
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <Skeleton key={i} className="h-8 w-12 rounded-md" />
                      ))}
                    </div>
                  </div>

                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
              </Tabs>
            </div>

            {/* Performance Chart */}
            <div className="rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229] p-6">
              <Skeleton className="h-6 w-48 mb-4" />
              <Skeleton className="h-[200px] w-full rounded-md" />
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {/* Your Position */}
            <div className="rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229] p-6">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-px w-full" />
                <div className="flex justify-between">
                  <Skeleton className="h-5 w-28" />
                  <Skeleton className="h-5 w-20" />
                </div>
              </div>
            </div>

            {/* Vault Details */}
            <div className="rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229] p-6">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229] p-6">
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 pb-3 border-b border-[#A8B2D1]/10 last:border-0"
                  >
                    <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
