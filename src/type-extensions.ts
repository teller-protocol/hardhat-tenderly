import "hardhat/types/config";
import "hardhat/types/runtime";

import { ContractByName, TenderlyConfig } from "./tenderly/types";

declare module "hardhat/types/runtime" {
  export interface HardhatRuntimeEnvironment {
    tenderly: {
      verify: (...contracts: ContractByName[]) => Promise<void>;
      push: (...contracts: ContractByName[]) => Promise<void>;
      persistArtifacts: (...contracts: ContractByName[]) => Promise<void>;
    };
  }
}

declare module "hardhat/types/config" {
  export interface HardhatUserConfig {
    tenderly?: TenderlyConfig;
  }

  export interface HardhatConfig {
    tenderly: TenderlyConfig;
  }
}
