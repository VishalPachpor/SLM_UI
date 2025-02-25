"use client";

import { StarknetConfig } from "@starknet-react/core";
import { sepolia } from "@starknet-react/chains";
import { InjectedConnector } from "starknetkit/injected";
import {
  ArgentMobileConnector,
  isInArgentMobileAppBrowser,
} from "starknetkit/argentMobile";
import { WebWalletConnector } from "starknetkit/webwallet";
import { publicProvider } from "@starknet-react/core";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const chains = [sepolia];

  const connectors = isInArgentMobileAppBrowser()
    ? [
        ArgentMobileConnector.init({
          options: {
            dappName: "SLM Platform",
            projectId: "slm-platform",
          },
          inAppBrowserOptions: {},
        }),
      ]
    : [
        new InjectedConnector({ options: { id: "braavos", name: "Braavos" } }),
        new InjectedConnector({ options: { id: "argentX", name: "Argent X" } }),
        new WebWalletConnector({ url: "https://web.argent.xyz" }),
        ArgentMobileConnector.init({
          options: {
            dappName: "SLM Platform",
            projectId: "slm-platform",
          },
        }),
      ];

  return (
    <StarknetConfig
      chains={chains}
      provider={publicProvider()}
      connectors={connectors}
    >
      {children}
    </StarknetConfig>
  );
}
