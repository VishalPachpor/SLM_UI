import { useConnect, useDisconnect, useAccount } from "@starknet-react/core";
import { useState, useCallback } from "react";

export function useWallet() {
  const { connect, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected, account } = useAccount();
  const [showWalletModal, setShowWalletModal] = useState(false);

  // Format address for display (shortened)
  const formattedAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-6)}`
    : "";

  // Connect wallet
  const connectWallet = useCallback(() => {
    setShowWalletModal(true);
  }, []);

  // Handle modal close
  const handleModalClose = useCallback(() => {
    setShowWalletModal(false);
  }, []);

  // Disconnect wallet
  const disconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);

  return {
    connectWallet,
    disconnectWallet,
    address,
    formattedAddress,
    isConnected,
    isConnecting,
    account,
    showWalletModal,
    setShowWalletModal,
    handleModalClose,
    connect,
  };
}
