export interface TenderlyContractConfig {
  compiler_version?: string;
  optimizations_used?: boolean;
  optimizations_count?: number;
  evm_version?: string;
}

export interface TenderlyContract {
  contractName: string;
  source: string;
  sourcePath: string;
  compiler?: ContractCompiler;
  networks?: Record<string, ContractNetwork>;
}

export interface TenderlyArtifact {
  address: string;
  metadata: string;
  bytecode: string;
  deployedBytecode: string;
  abi: any;
}

export interface ContractCompiler {
  name?: string;
  version: string;
}

export interface ContractNetwork {
  events?: any;
  links?: Record<string, string>;
  address: string;
  transactionHash?: string;
}

export interface ContractByName {
  name: string;
  customName?: string;
  address: string;
  network?: string;
}

export interface ApiContract {
  address: string;
  network_id: string;
}
