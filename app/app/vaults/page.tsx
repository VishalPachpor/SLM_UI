import { VaultsList } from "@/components/app/vaults-list";

export default function VaultsPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-8 text-[#E6EDF3]">
        Available Vaults
      </h1>
      <VaultsList />
    </>
  );
}
