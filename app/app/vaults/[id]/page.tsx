import { VaultDetails } from "@/components/app/vault-details";

export default function VaultPage({ params }: { params: { id: string } }) {
  return <VaultDetails vaultId={params.id} />;
}
