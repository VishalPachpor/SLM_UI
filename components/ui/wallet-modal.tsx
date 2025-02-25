"use client";

import { useConnect } from "@starknet-react/core";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const { connect, connectors } = useConnect();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-lg">
            Connect Wallet
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          {connectors.map((connector) => (
            <Button
              key={connector.id}
              onClick={() => {
                connect({ connector });
                onClose();
              }}
              className="w-full justify-start gap-2 bg-[#1a1b23] text-[#ed796b] hover:bg-[#1a1b23]/80"
              disabled={!connector.available()}
            >
              {connector.icon && (
                <img
                  src={connector.icon}
                  alt={`${connector.name} logo`}
                  className="h-5 w-5"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
              {connector.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
